export const getGreeting = (user) => {
  const hour = new Date().getHours();
  let timeOfDay = "Morning";

  if (hour >= 12 && hour < 17) {
    timeOfDay = "Afternoon";
  } else if (hour >= 17 || hour < 5) {
    timeOfDay = "Evening";
  }

  return `Good ${timeOfDay}, ${user?.name || "Patient"}`;
};