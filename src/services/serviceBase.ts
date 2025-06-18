export async function get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fel vid hämtning");
    }
    return await response.json();
  }
  