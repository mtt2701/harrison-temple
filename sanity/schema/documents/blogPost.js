export default {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name:"slug",
            title: "Slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                max_length: 96,
            },
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {type: "block"},
                {type: "image"},
            ],
        }
    ],
};