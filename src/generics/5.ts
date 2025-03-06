export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleStatuses = Record<UserRole, string>;

export const RoleDescription: RoleStatuses = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
