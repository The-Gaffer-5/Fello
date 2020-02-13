import { uuid } from './utils'

export default {
  name: 'Fello-Master',
  backgroundImg: 'barn_full',
  backgroundImgs: [
    'sandhamn',
    'flower',
    'bea',
    'puddle'
  ],
  columns: [
    {
      name: 'Welcome to Fello',
      id: uuid(),
      tasks: [
        {
          description: 'Move tasks to different lists. Move Lists to different spots.',
          name: 'Drag and Drop',
          id: uuid(),
          userAssigned: null,
          column: 'Welcome to Fello'
        },
        {
          description: 'Click a task to change name and see/edit details',
          name: 'Add Details',
          id: uuid(),
          userAssigned: null,
          column: 'Welcome to Fello'
        },
        {
          description: 'Change the background, organize and reorganize to your heart\'s content.',
          name: 'Have Fun!',
          id: uuid(),
          userAssigned: null,
          column: 'Welcome to Fello'
        },
      ]
    },
  ]
}