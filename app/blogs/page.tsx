import { getSortedPostsData } from "@/lib/blog";
import BlogLayout from "@/components/blog/BlogLayout";
import { BlogList } from "@/components/blog/BlogList";

export default function Blogs() {
    const allPosts = getSortedPostsData();

    return (
        <BlogLayout>
            {allPosts.length > 0 ? (
                <BlogList posts={allPosts} />
            ) : (
                <div className="text-center py-12">
                    <h2 className="text-xl font-medium mb-2">No posts yet</h2>
                    <p className="text-gray-600 dark:text-gray-400">Check back later for new content!</p>
                </div>
            )}
        </BlogLayout>
    );
}