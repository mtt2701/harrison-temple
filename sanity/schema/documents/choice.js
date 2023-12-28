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
        },
        {
            name:"target",
            title: "Target",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
    ],
};