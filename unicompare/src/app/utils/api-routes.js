export const GetUniversityDetail = async (name) => {
  try {
    const university = await fetch(`/api/university/${name}`);
    const data = await university.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
