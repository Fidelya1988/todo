export const filterElementsArray = (allElements, searchMatching) => {
  const filterElements = allElements.filter((element) => {
    const matchContent = element.content&& element.content.toLowerCase().includes(searchMatching);
    const matchDate = element.date&&element.date.toLowerCase().includes(searchMatching);

    return !searchMatching ? allElements : matchContent | matchDate && element;
  });
  return filterElements;
};
