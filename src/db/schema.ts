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
} from "drizzle-orm/pg-core";

// Enums
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

// User
export const usersTable = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  phoneNumber: text("phone_number"),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

export const sessionsTable = pgTable("sessions", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
});

export const accountsTable = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verificationsTable = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(() => new Date()),
  updatedAt: timestamp("updated_at").$defaultFn(() => new Date()),
});

// Role
export const rolesTable = pgTable("roles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 50 }).notNull().unique(),
});

export const userRolesTable = pgTable(
  "user_roles",
  {
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id),
    roleId: uuid("role_id")
      .notNull()
      .references(() => rolesTable.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.roleId] }),
    };
  }
);

// Event
export const eventsTable = pgTable("events", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  category: varchar("category", { length: 100 }),
  maxParticipants: integer("max_participants"),
  date: timestamp("date"),
  time: varchar("time", { length: 20 }),
  duration: varchar("duration", { length: 20 }),
  location: text("location"),
  address: text("address"),
  speakerName: varchar("speaker_name", { length: 255 }),
  createdBy: text("created_by").references(() => usersTable.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const eventAttendanceTable = pgTable(
  "event_attendance",
  {
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id),
    eventId: uuid("event_id")
      .notNull()
      .references(() => eventsTable.id),
    status: attendanceStatusEnum("status"),
    confirmedAt: timestamp("confirmed_at"),
    checkInTime: timestamp("check_in_time"),
    wasPresent: boolean("was_present"),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.eventId] }),
    };
  }
);

// Post
export const postCategoriesTable = pgTable("post_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
});

export const postsTable = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }),
  content: text("content"),
  categoryId: uuid("category_id").references(() => postCategoriesTable.id),
  createdBy: text("created_by").references(() => usersTable.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const postCommentsTable = pgTable("post_comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id").references(() => postsTable.id),
  userId: text("user_id").references(() => usersTable.id),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const postLikesTable = pgTable(
  "post_likes",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => postsTable.id),
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.postId, table.userId] }),
    };
  }
);

// Media
export const mediaFilesTable = pgTable("media_files", {
  id: uuid("id").primaryKey().defaultRandom(),
  url: text("url").notNull(),
  type: mediaTypeEnum("type"),
  uploadedBy: text("uploaded_by").references(() => usersTable.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const postMediaTable = pgTable(
  "post_media",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => postsTable.id),
    mediaId: uuid("media_id")
      .notNull()
      .references(() => mediaFilesTable.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.postId, table.mediaId] }),
    };
  }
);

export const eventMediaTable = pgTable(
  "event_media",
  {
    eventId: uuid("event_id")
      .notNull()
      .references(() => eventsTable.id),
    mediaId: uuid("media_id")
      .notNull()
      .references(() => mediaFilesTable.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.eventId, table.mediaId] }),
    };
  }
);

// Meeting
export const meetingsTable = pgTable("meetings", {
  id: uuid("id").primaryKey().defaultRandom(),
  eventId: uuid("event_id").references(() => eventsTable.id),
  userId: text("user_id").references(() => usersTable.id),
  title: text("title").notNull(),
  description: text("description"),
  category: varchar("category", { length: 100 }),
  tags: text("tags").array(),
  meetingVideo: text("meeting_video"),
  coverImage: text("cover_image"),
  recordingDate: timestamp("recording_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Notification
export const notificationsTable = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").references(() => usersTable.id),
  content: text("content"),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// AuditLog
export const auditLogsTable = pgTable("audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  adminId: text("admin_id").references(() => usersTable.id),
  action: varchar("action", { length: 100 }),
  targetTable: varchar("target_table", { length: 100 }),
  targetId: uuid("target_id"),
  timestamp: timestamp("timestamp").defaultNow(),
  details: json("details"),
});
