## Blog System

This project includes a blog system that allows you to write content in Markdown format and displays it on your website.

### How to Add a New Blog Post

1. Create a new Markdown file in the `app/blogs/posts` directory with a descriptive filename (e.g., `my-new-post.md`).

2. Add the required frontmatter at the top of your file:

```md
---
title: 'Your Post Title'
description: 'A brief description of your post'
date: '2023-12-15'
author: 'Your Name'
tags: ['tag1', 'tag2']
coverImage: '/blog-images/your-image.jpg'
---
```

3. Add your blog content below the frontmatter using Markdown syntax.

4. To include images in your post:
   - Place the image files in the `public/blog-images` directory
   - Reference them in your Markdown as `/blog-images/your-image.jpg`

Example:
```md
![Alt text for your image](/blog-images/your-image.jpg)
```

5. The blog post will automatically appear in the blog list and be accessible at `/blogs/your-post-id`.

### Markdown Features

The blog system supports:
- Headers (# H1, ## H2, etc.)
- Bold and italic text
- Lists (ordered and unordered)
- Links
- Images
- Code blocks (with syntax highlighting)

