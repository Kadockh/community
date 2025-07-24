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
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phoneNumber: varchar("phone_number", { length: 20 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Role
export const roles = pgTable("roles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 50 }).notNull().unique(),
});

export const userRoles = pgTable(
  "user_roles",
  {
    userId: uuid("user_id").references(() => users.id),
    roleId: uuid("role_id").references(() => roles.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.roleId] }),
    };
  }
);

// Event
export const events = pgTable("events", {
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
  createdBy: uuid("created_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const eventAttendance = pgTable(
  "event_attendance",
  {
    userId: uuid("user_id").references(() => users.id),
    eventId: uuid("event_id").references(() => events.id),
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
export const postCategories = pgTable("post_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
});

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }),
  content: text("content"),
  categoryId: uuid("category_id").references(() => postCategories.id),
  createdBy: uuid("created_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const postComments = pgTable("post_comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id").references(() => posts.id),
  userId: uuid("user_id").references(() => users.id),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const postLikes = pgTable(
  "post_likes",
  {
    postId: uuid("post_id").references(() => posts.id),
    userId: uuid("user_id").references(() => users.id),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.postId, table.userId] }),
    };
  }
);

// Media
export const mediaFiles = pgTable("media_files", {
  id: uuid("id").primaryKey().defaultRandom(),
  url: text("url").notNull(),
  type: mediaTypeEnum("type"),
  uploadedBy: uuid("uploaded_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const postMedia = pgTable(
  "post_media",
  {
    postId: uuid("post_id").references(() => posts.id),
    mediaId: uuid("media_id").references(() => mediaFiles.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.postId, table.mediaId] }),
    };
  }
);

export const eventMedia = pgTable(
  "event_media",
  {
    eventId: uuid("event_id").references(() => events.id),
    mediaId: uuid("media_id").references(() => mediaFiles.id),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.eventId, table.mediaId] }),
    };
  }
);

// Meeting
export const meetings = pgTable("meetings", {
  id: uuid("id").primaryKey().defaultRandom(),
  eventId: uuid("event_id").references(() => events.id),
  userId: uuid("user_id").references(() => users.id),
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
export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  content: text("content"),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// AuditLog
export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  adminId: uuid("admin_id").references(() => users.id),
  action: varchar("action", { length: 100 }),
  targetTable: varchar("target_table", { length: 100 }),
  targetId: uuid("target_id"),
  timestamp: timestamp("timestamp").defaultNow(),
  details: json("details"),
});
