import {defineField, defineType} from 'sanity'

const lectureRecordingType = defineType({
  name: 'lecture-recording',
  title: 'Lecture Recording',
  type: 'document',
  fields: [
    defineField({
      name: 'module',
      title: 'Module',
      type: 'string',
      options: {
        list: [
          {title: 'Programming Fundamentals', value: 'Programming Fundamentals'},
          {title: 'Web Fundamentals', value: 'Web Fundamentals'},
          {title: 'SQL Fundamentals', value: 'SQL Fundamentals'},
          {title: 'Intro to React', value: 'Intro to React'},
          {title: '.NET Web Development', value: '.NET Web Development'},
          {title: 'Data Engineering Fundamentals', value: 'Data Engineering Fundamentals'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({
      name: 'week',
      title: 'Week',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(14).error('Week must be between 1 and 14'),
    }),
    defineField({
      name: 'day',
      title: 'Day',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Day must be between 1 and 5'),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})

export default lectureRecordingType
