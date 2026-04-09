import { createLevelStandards } from '../lib/create-level-standards'
import { GenderStandards } from '../types/standart.types'

export const baseStandards: GenderStandards = {
  male: {
    total: {
      53: createLevelStandards(0, 200, 215, 240, 265, 300, 340),
      59: createLevelStandards(0, 275, 300, 340, 385, 465, 545),
      66: createLevelStandards(0, 305, 335, 380, 425, 525, 620),
      74: createLevelStandards(0, 325, 365, 415, 460, 580, 685),
      83: createLevelStandards(0, 350, 400, 455, 500, 640, 750),
      93: createLevelStandards(0, 385, 430, 480, 540, 690, 785),
      105: createLevelStandards(0, 415, 460, 510, 585, 720, 822.5),
      120: createLevelStandards(0, 455, 505, 555, 635, 770, 855),
      999: createLevelStandards(0, 485, 525, 585, 690, 815, 925),
    },

    bench: {
      53: createLevelStandards(0, 50, 55, 60, 67.5, 75, 85),
      59: createLevelStandards(0, 70, 75, 85, 95, 115, 135),
      66: createLevelStandards(0, 77.5, 85, 95, 107.5, 132.5, 157.5),
      74: createLevelStandards(0, 82.5, 92.5, 105, 117.5, 145, 172.5),
      83: createLevelStandards(0, 90, 100, 115, 125, 160, 187.5),
      93: createLevelStandards(0, 97.5, 107.5, 120, 135, 172.5, 197.5),
      105: createLevelStandards(0, 105, 115, 127.5, 147.5, 180, 205),
      120: createLevelStandards(0, 115, 127.5, 140, 160, 195, 217.5),
      999: createLevelStandards(0, 122.5, 132.5, 147.5, 172.5, 205, 232.5),
    },

    squat: {
      53: createLevelStandards(0, 67.5, 72.5, 80, 87.5, 100, 115),
      59: createLevelStandards(0, 95, 105, 120, 135, 162.5, 190),
      66: createLevelStandards(0, 105, 115, 132.5, 147.5, 182.5, 215),
      74: createLevelStandards(0, 112.5, 127.5, 145, 160, 200, 235),
      83: createLevelStandards(0, 122.5, 140, 160, 175, 225, 262.5),
      93: createLevelStandards(0, 135, 150, 167.5, 190, 242.5, 275),
      105: createLevelStandards(0, 145, 160, 180, 205, 252.5, 290),
      120: createLevelStandards(0, 160, 177.5, 195, 222.5, 270, 300),
      999: createLevelStandards(0, 170, 185, 205, 240, 285, 325),
    },

    deadlift: {
      53: createLevelStandards(0, 82.5, 87.5, 100, 110, 125, 140),
      59: createLevelStandards(0, 110, 120, 135, 152.5, 185, 220),
      66: createLevelStandards(0, 122.5, 135, 152.5, 170, 210, 247.5),
      74: createLevelStandards(0, 130, 145, 165, 182.5, 230, 270),
      83: createLevelStandards(0, 140, 160, 180, 200, 255, 300),
      93: createLevelStandards(0, 152.5, 172.5, 192.5, 217.5, 275, 315),
      105: createLevelStandards(0, 165, 185, 205, 232.5, 287.5, 327.5),
      120: createLevelStandards(0, 180, 200, 220, 252.5, 305, 337.5),
      999: createLevelStandards(0, 192.5, 207.5, 232.5, 277.5, 325, 360),
    },
  },

  female: {
    total: {
      43: createLevelStandards(0, 97.5, 105, 115, 125, 145, 170),
      47: createLevelStandards(0, 125, 145, 170, 210, 270, 335),
      52: createLevelStandards(0, 145, 170, 195, 245, 300, 370),
      57: createLevelStandards(0, 165, 185, 205, 275, 325, 390),
      63: createLevelStandards(0, 180, 200, 230, 305, 350, 422.5),
      69: createLevelStandards(0, 190, 222.5, 252.5, 320, 365, 440),
      76: createLevelStandards(0, 210, 242.5, 277.5, 340, 385, 457.5),
      84: createLevelStandards(0, 220, 255, 295, 350, 395, 475),
      999: createLevelStandards(0, 250, 285, 317.5, 375, 420, 525),
    },

    bench: {
      43: createLevelStandards(0, 22.5, 25, 27.5, 30, 35, 40),
      47: createLevelStandards(0, 27.5, 32.5, 37.5, 45, 57.5, 70),
      52: createLevelStandards(0, 32.5, 37.5, 42.5, 52.5, 65, 80),
      57: createLevelStandards(0, 35, 40, 45, 60, 72.5, 87.5),
      63: createLevelStandards(0, 40, 45, 50, 67.5, 77.5, 95),
      69: createLevelStandards(0, 42.5, 50, 57.5, 72.5, 82.5, 100),
      76: createLevelStandards(0, 47.5, 55, 62.5, 77.5, 87.5, 105),
      84: createLevelStandards(0, 50, 57.5, 67.5, 82.5, 92.5, 112.5),
      999: createLevelStandards(0, 57.5, 65, 72.5, 87.5, 100, 125),
    },

    squat: {
      43: createLevelStandards(0, 35, 37.5, 42.5, 47.5, 55, 65),
      47: createLevelStandards(0, 45, 52.5, 60, 72.5, 95, 117.5),
      52: createLevelStandards(0, 52.5, 60, 70, 87.5, 107.5, 132.5),
      57: createLevelStandards(0, 60, 67.5, 75, 100, 120, 145),
      63: createLevelStandards(0, 65, 72.5, 82.5, 110, 127.5, 152.5),
      69: createLevelStandards(0, 67.5, 77.5, 90, 115, 132.5, 160),
      76: createLevelStandards(0, 75, 87.5, 100, 122.5, 140, 167.5),
      84: createLevelStandards(0, 80, 92.5, 105, 132.5, 150, 180),
      999: createLevelStandards(0, 90, 102.5, 115, 145, 162.5, 202.5),
    },

    deadlift: {
      43: createLevelStandards(0, 40, 42.5, 47.5, 52.5, 60, 70),
      47: createLevelStandards(0, 52.5, 60, 72.5, 92.5, 117.5, 147.5),
      52: createLevelStandards(0, 60, 70, 82.5, 102.5, 127.5, 157.5),
      57: createLevelStandards(0, 67.5, 77.5, 85, 115, 137.5, 165),
      63: createLevelStandards(0, 72.5, 82.5, 95, 127.5, 145, 175),
      69: createLevelStandards(0, 77.5, 90, 102.5, 130, 150, 180),
      76: createLevelStandards(0, 85, 100, 115, 140, 157.5, 187.5),
      84: createLevelStandards(0, 90, 105, 122.5, 145, 165, 197.5),
      999: createLevelStandards(0, 102.5, 117.5, 130, 155, 175, 217.5),
    },
  },
}


// Расчёт носит справочный характер и использует внутреннюю модель уровней приложения. Для официальных нормативов, условий выполнения и 
// экипировочных дивизионов ориентируйтесь на регламенты выбранной федерации.