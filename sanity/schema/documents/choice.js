export default {
    name: "choice",
    title: "Choice",
    type: "document",
    fields: [
        {
            name: "top",
            title: "Top",
            type: "boolean",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name:"current",
            title: "Current",
            type: "string",
            validation: (Rule) => Rule.required(),
            // options: {
            //     source: "title",
            //     max_length: 96,
            // },
        },
        {
            name:"target",
            title: "Target",
            type: "string",
            validation: (Rule) => Rule.required(),
            // options: {
            //     source: "title",
            //     max_length: 96,
            // },
        },
        // {
        //     name: "description",
        //     title: "Description",
        //     type: "string",
        //     validation: (Rule) => Rule.required(),
        // },
        // {
        //     name: "date",
        //     title: "Date",
        //     type: "date",
        //     validation: (Rule) => Rule.required(),
        // },
        // {
        //     name: "image",
        //     title: "Image",
        //     type: "image",
        //     validation: (Rule) => Rule.required(),
        //     options: {
        //         hotspot: true,
        //     },
        // },
        // {
        //     name: "content",
        //     title: "Content",
        //     type: "array",
        //     of: [
        //         {type: "block"},
        //         {type: "image"},
        //     ],
        // }
    ],
};