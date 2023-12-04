export default async function fetchApi(pageTitle: string, pageNum: number) {
  try {
    const response = await fetch(`/api/${pageTitle}/${pageNum}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching game data:", error);
    return;
  }
}
