export const sidebarLinks = [
  {
    label: "Home",
    imageUrl: "/icons/Home.svg",
    route: "/",
  },
  {
    label: "Upcoming",
    imageUrl: "/icons/upcoming.svg",
    route: "/upcoming",
  },
  {
    label: "Previous",
    imageUrl: "/icons/previous.svg",
    route: "/previous",
  },
  {
    label: "Recordings",
    imageUrl: "/icons/Video.svg",
    route: "/recordings",
  },
  {
    label: "Personal Room",
    imageUrl: "/icons/add-personal.svg",
    route: "/personal-room",
  },
];

export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
];

export enum MeetingType {
  upcoming,
  ended,
  recordings
}
