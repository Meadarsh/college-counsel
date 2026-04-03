import UniversityFormPage from '@/app/components/dashboard/university/universityFormPage'
import React from 'react'

const Page = async ({ params }) => {
  let data;
  try {
    // Note: params.url here corresponds to the [url] directory name
    const response = await fetch(`${process.env.BASE_URL}/api/university/${params.url}`, {
      cache: "no-store",
    });
    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.error("Fetch university error:", error);
  }

  if (!data) {
    return <div>University not found</div>;
  }

  return (
    <UniversityFormPage data={data} />
  )
}

export default Page
