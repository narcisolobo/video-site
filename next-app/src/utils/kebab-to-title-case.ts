function kebabToTitleCase(input: string): string {
  return input
    .split("-")
    .map((word) => {
      if (word.toLowerCase() === ".net") return ".NET";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export { kebabToTitleCase };
