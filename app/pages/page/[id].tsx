// pages/page/[id].tsx
import { useRouter } from 'next/router';

// app/pages/page/[id].tsx
const newsContent: { [key: string]: { title: string; content: string } } = {
  1: { title: 'Home', content: 'Start Your Assessment' },
  2: { title: 'About Assessments', content: 'Explore different assessment options' },
  3: { title: 'Career Paths', content: 'Discover various career paths' },
  4: { title: 'Blog Paths', content: 'Read the latest insights on careers' },
};

interface NewsItem {
  title: string;
  content: string;
}

const NewsPage = ({ newsItem }: { newsItem: NewsItem }) => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold">{newsItem.title}</h1>
      <p className="mt-4">{newsItem.content}</p>
      {/* Add more content or components as needed */}
    </div>
  );
};

// This function generates the paths for the static pages
export const getStaticPaths = async () => {
  const paths = Object.keys(newsContent).map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false, // Set to false to show a 404 for non-existent pages
  };
};

// This function fetches the data for each page at build time
export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const newsItem = newsContent[params.id] || { title: 'Not Found', content: 'This page does not exist.' };

  return {
    props: {
      newsItem,
    },
  };
};

export default NewsPage;