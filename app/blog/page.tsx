import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const blogPosts = [
  {
    slug: "first-post",
    title: "My First Blog",
    image: "/images/blog1.jpg",
  },
  {
    slug: "second-post",
    title: "Another Article",
    image: "/images/blog2.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <motion.div
          key={post.slug}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <CardHeader>
              <h3>{post.title}</h3>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
