import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import "./style.css"

export const metadata = {
  title: title,
  description: metaDescription,
};

async function getFeedPost(slug) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/ai-blog/${slug}`, {
      next: { revalidate: 60 * 5 } // Revalidate every 5 minutes
    });
    
    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch feed post');
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error fetching feed post:', error);
    return null;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const response = await getFeedPost(slug);
  
  if (!response?.data) {
    notFound();
  }
  
  const { title, content,metaDescription, imageUrl, createdAt, relatedBlogs } = response.data;
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0">
          <Link href="/feed">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Feed
          </Link>
        </Button>
      </div>
      
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/logo/cc-bg.png" alt="College Counsel" />
                <AvatarFallback>CC</AvatarFallback>
              </Avatar>
              <span>College Counsel</span>
            </div>
            <span className="mx-2">•</span>
            <time dateTime={createdAt}>
              {format(new Date(createdAt), 'MMMM d, yyyy')}
            </time>
          </div>
        </header>
        
        {imageUrl && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <div 
          className="blogContent dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </article>
      
      {relatedBlogs?.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((post) => (
              <Link key={post._id} href={`/feed/${post.slug}`}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-40">
                      <Image
                        src={post.imageUrl || '/image/default.jpg'}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="font-semibold line-clamp-2">{post.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
