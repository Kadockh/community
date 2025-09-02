// drizzle/schema.ts
import {
  pgTable,
  uuid,
  text,
  varchar,
  timestamp,
  integer,
  boolean,
  json,
  primaryKey,
  pgEnum,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// =====================
// Enums
// =====================
export const mediaTypeEnum = pgEnum("media_type", [
  "image",
  "video",
  "document",
]);
export const attendanceStatusEnum = pgEnum("attendance_status", [
  "confirmed",
  "declined",
  "maybe",
]);
export const auditActionEnum = pgEnum("audit_action", [
  "create",
  "update",
  "delete",
  "publish",
  "signin",
  "signout",
]);

// =====================
// Users (BetterAuth-compatible)
// Keep id as text because BetterAuth commonly uses string ids
// =====================
export const usersTable = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  phoneNumber: text("phone_number"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// =====================
// User Profile (1-1 with Users)
// Only presentation/profile fields here
// =====================
export const userProfilesTable = pgTable("user_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  title: text("title"),
  bio: text("bio"),
  phone: text("phone"),
  coverImage: text("cover_image"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// =====================
// Auth Tables (BetterAuth)
// =====================
export const sessionsTable = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    token: text("token").notNull().unique(),
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => ({
    ixUser: index("ix_sessions_user").on(table.userId),
    ixExpires: index("ix_sessions_expires").on(table.expiresAt),
  })
);

export const accountsTable = pgTable(
  "accounts",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", {
      withTimezone: true,
    }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", {
      withTimezone: true,
    }),
    scope: text("scope"),
    password: text("password"), // for email+password provider (hashed)
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => ({
    uqProviderAccount: uniqueIndex("uq_provider_account").on(
      table.providerId,
      table.accountId
    ),
    ixUser: index("ix_accounts_user").on(table.userId),
  })
);

export const verificationsTable = pgTable(
  "verifications",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(), // e.g. email or user id
    value: text("value").notNull(), // token/code (store hashed if desired)
    purpose: varchar("purpose", { length: 50 }).notNull(), // e.g. "email_verification" | "reset_password"
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => ({
    uqIdentifierValue: uniqueIndex("uq_verification_identifier_value").on(
      table.identifier,
      table.value
    ),
    ixExpires: index("ix_verifications_expires").on(table.expiresAt),
  })
);

// =====================
// Roles & UserRoles
// =====================
export const rolesTable = pgTable("roles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 50 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const userRolesTable = pgTable(
  "user_roles",
  {
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    roleId: uuid("role_id")
      .notNull()
      .references(() => rolesTable.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.roleId] }),
    ixRole: index("ix_user_roles_role").on(table.roleId),
  })
);

// =====================
// Events & Attendance
// =====================
export const eventsTable = pgTable("events", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  category: varchar("category", { length: 100 }),
  maxParticipants: integer("max_participants"),
  startAt: timestamp("start_at", { withTimezone: true }).notNull(),
  endAt: timestamp("end_at", { withTimezone: true }),
  location: text("location"),
  address: text("address"),
  speakerName: varchar("speaker_name", { length: 255 }),
  createdBy: text("created_by").references(() => usersTable.id, {
    onDelete: "set null",
  }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const eventAttendanceTable = pgTable(
  "event_attendance",
  {
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    eventId: uuid("event_id")
      .notNull()
      .references(() => eventsTable.id, { onDelete: "cascade" }),
    status: attendanceStatusEnum("status").notNull().default("maybe"),
    confirmedAt: timestamp("confirmed_at", { withTimezone: true }),
    checkInTime: timestamp("check_in_time", { withTimezone: true }),
    wasPresent: boolean("was_present").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.eventId] }),
    ixEvent: index("ix_event_attendance_event").on(table.eventId),
  })
);

// =====================
// Posts, Categories, Tags
// =====================
export const postCategoriesTable = pgTable("post_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull().unique(),
});

export const postsTable = pgTable(
  "posts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }).notNull(),
    content: text("content"),
    categoryId: uuid("category_id").references(() => postCategoriesTable.id, {
      onDelete: "set null",
    }),
    createdBy: text("created_by").references(() => usersTable.id, {
      onDelete: "set null",
    }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
    publishedAt: timestamp("published_at", { withTimezone: true }),
  },
  (table) => ({
    ixCategory: index("ix_posts_category").on(table.categoryId),
    ixAuthor: index("ix_posts_author").on(table.createdBy),
  })
);

export const tagsTable = pgTable("tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 50 }).notNull().unique(),
});

export const postTagsTable = pgTable(
  "post_tags",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => tagsTable.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.postId, table.tagId] }),
  })
);

export const postCommentsTable = pgTable("post_comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => postsTable.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "set null" }),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const postLikesTable = pgTable(
  "post_likes",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.postId, table.userId] }),
  })
);

// =====================
// Media & Attachments
// =====================
export const mediaFilesTable = pgTable("media_files", {
  id: uuid("id").primaryKey().defaultRandom(),
  url: text("url").notNull(),
  type: mediaTypeEnum("type").notNull(),
  sizeBytes: integer("size_bytes"),
  mimeType: varchar("mime_type", { length: 100 }),
  width: integer("width"),
  height: integer("height"),
  uploadedBy: text("uploaded_by").references(() => usersTable.id, {
    onDelete: "set null",
  }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const postMediaTable = pgTable(
  "post_media",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    mediaId: uuid("media_id")
      .notNull()
      .references(() => mediaFilesTable.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.postId, table.mediaId] }),
  })
);

export const eventMediaTable = pgTable(
  "event_media",
  {
    eventId: uuid("event_id")
      .notNull()
      .references(() => eventsTable.id, { onDelete: "cascade" }),
    mediaId: uuid("media_id")
      .notNull()
      .references(() => mediaFilesTable.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.eventId, table.mediaId] }),
  })
);

// =====================
// Meetings (+ tags, media)
// =====================
export const meetingsTable = pgTable(
  "meetings",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    eventId: uuid("event_id").references(() => eventsTable.id, {
      onDelete: "set null",
    }),
    userId: text("user_id").references(() => usersTable.id, {
      onDelete: "set null",
    }),
    title: text("title").notNull(),
    description: text("description"),
    category: varchar("category", { length: 100 }),
    meetingVideo: text("meeting_video"),
    coverImage: text("cover_image"),
    recordingDate: timestamp("recording_date", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => ({
    ixEvent: index("ix_meetings_event").on(table.eventId),
  })
);

export const meetingTagsTable = pgTable(
  "meeting_tags",
  {
    meetingId: uuid("meeting_id")
      .notNull()
      .references(() => meetingsTable.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => tagsTable.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.meetingId, table.tagId] }),
  })
);

export const meetingMediaTable = pgTable(
  "meeting_media",
  {
    meetingId: uuid("meeting_id")
      .notNull()
      .references(() => meetingsTable.id, { onDelete: "cascade" }),
    mediaId: uuid("media_id")
      .notNull()
      .references(() => mediaFilesTable.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.meetingId, table.mediaId] }),
  })
);

// =====================
// Notifications
// =====================
export const notificationsTable = pgTable(
  "notifications",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    type: varchar("type", { length: 50 }).notNull(), // e.g. EVENT_INVITE, POST_COMMENT
    targetType: varchar("target_type", { length: 50 }), // e.g. "event" | "post" | "meeting"
    targetId: text("target_id"),
    content: text("content"),
    isRead: boolean("is_read").notNull().default(false),
    readAt: timestamp("read_at", { withTimezone: true }),
    createdBy: text("created_by").references(() => usersTable.id, {
      onDelete: "set null",
    }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    ixUser: index("ix_notifications_user").on(table.userId),
    ixIsRead: index("ix_notifications_is_read").on(table.isRead),
  })
);

// =====================
// Audit Logs
// =====================
export const auditLogsTable = pgTable(
  "audit_logs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    actorId: text("actor_id").references(() => usersTable.id, {
      onDelete: "set null",
    }),
    action: auditActionEnum("action").notNull(),
    targetType: varchar("target_type", { length: 100 }).notNull(),
    targetId: text("target_id"),
    details: json("details"),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    ixTarget: index("ix_audit_target").on(table.targetType, table.targetId),
    ixActor: index("ix_audit_actor").on(table.actorId),
  })
);
