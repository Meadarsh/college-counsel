"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const UniversitiesPage = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUniversities = async () => {
      try {
        const res = await fetch("/api/university/get-university");
        if (!res.ok) {
          throw new Error('Failed to fetch universities');
        }
        const data = await res.json();
        setUniversities(data);
      } catch (error) {
        console.error(error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    getUniversities();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Universities</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((university) => (
          <Link 
            href={`/dashboard/university/update/${university.url}`} 
            key={university.url}
            passHref
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={university?.detail?.imageUrl} 
                  alt={university?.detail?.title || "University Image"} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{university?.detail?.title}</h2>
                <p className="text-gray-500 text-sm">
                  {new Date(university.upload_time).toLocaleDateString()}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {university?.detail?.certificates?.length||0} certificates available
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UniversitiesPage;