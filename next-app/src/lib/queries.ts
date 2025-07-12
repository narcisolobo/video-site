const getRecordingsByWeek = (week: number) => {
  return `*[_type == "lecture-recording" && week == ${week}] | order(date asc)`;
};

export { getRecordingsByWeek };
