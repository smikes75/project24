import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, User, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Image } from '../../components/Image';
import { formatDate } from '../../utils/date';
import { useBlogPost } from '../../hooks/useBlogPost';

function BlogPostPage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const { post, isLoading, error } = useBlogPost(slug!, i18n.language);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-[400px] bg-gray-200 rounded-lg mb-8" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${post.title} | DataHelp.eu Blog`}
        description={post.seoDescription}
        keywords={post.tags.join(', ')}
        canonical={`https://datahelp.eu/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
      />

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          to="/blog"
          className="inline-flex items-center text-primary hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <Image
          src={post.coverImage}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          lazy={false}
        />
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {formatDate(post.date, i18n.language)}
            </span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-primary mb-6">{post.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center space-x-2">
              <Tag className="h-5 w-5 text-accent" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogPostPage;