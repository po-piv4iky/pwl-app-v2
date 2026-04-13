import { createLevelStandards } from '../lib/create-level-standards'
import { GenderStandards } from '../types/standard.types'

export const wrpfStandards: GenderStandards = {
  male: {
    total: {
      52: createLevelStandards(0, 240, 280, 322.5, 362.5, 402.5, 465),
      56: createLevelStandards(0, 260, 305, 350, 395, 437.5, 505),
      60: createLevelStandards(0, 280, 327.5, 375, 422.5, 470, 542.5),
      67.5: createLevelStandards(0, 312.5, 365, 420, 472.5, 525, 605),
      75: createLevelStandards(0, 345, 402.5, 460, 517.5, 577.5, 662.5),
      82.5: createLevelStandards(0, 370, 430, 492.5, 552.5, 615, 707.5),
      90: createLevelStandards(0, 387.5, 452.5, 517.5, 582.5, 647.5, 745),
      100: createLevelStandards(0, 410, 477.5, 545, 615, 682.5, 785),
      110: createLevelStandards(0, 430, 502.5, 572.5, 645, 715, 822.5),
      125: createLevelStandards(0, 450, 525, 597.5, 672.5, 747.5, 857.5),
      140: createLevelStandards(0, 465, 540, 617.5, 695, 770, 885),
      999: createLevelStandards(0, 475, 555, 632.5, 710, 790, 907.5),
    },

    bench: {
      52: createLevelStandards(0, 57.5, 67.5, 75, 82.5, 95, 110),
      56: createLevelStandards(0, 62.5, 72.5, 80, 90, 102.5, 120),
      60: createLevelStandards(0, 67.5, 77.5, 87.5, 97.5, 112.5, 127.5),
      67.5: createLevelStandards(0, 75, 87.5, 97.5, 107.5, 125, 142.5),
      75: createLevelStandards(0, 82.5, 95, 105, 117.5, 135, 155),
      82.5: createLevelStandards(0, 87.5, 102.5, 112.5, 127.5, 145, 167.5),
      90: createLevelStandards(0, 92.5, 107.5, 120, 132.5, 152.5, 175),
      100: createLevelStandards(0, 97.5, 112.5, 125, 140, 162.5, 185),
      110: createLevelStandards(0, 100, 117.5, 132.5, 147.5, 167.5, 195),
      125: createLevelStandards(0, 105, 122.5, 137.5, 152.5, 177.5, 202.5),
      140: createLevelStandards(0, 110, 127.5, 142.5, 157.5, 182.5, 210),
      999: createLevelStandards(0, 112.5, 130, 145, 162.5, 187.5, 215),
    },

    deadlift: {
      52: createLevelStandards(0, 92.5, 107.5, 117.5, 135, 155, 177.5),
      56: createLevelStandards(0, 100, 117.5, 127.5, 145, 165, 190),
      60: createLevelStandards(0, 107.5, 122.5, 135, 152.5, 175, 202.5),
      67.5: createLevelStandards(0, 117.5, 137.5, 150, 170, 195, 222.5),
      75: createLevelStandards(0, 127.5, 147.5, 160, 182.5, 207.5, 237.5),
      82.5: createLevelStandards(0, 132.5, 155, 167.5, 190, 220, 250),
      90: createLevelStandards(0, 137.5, 160, 175, 200, 230, 262.5),
      100: createLevelStandards(0, 145, 167.5, 182.5, 207.5, 237.5, 272.5),
      110: createLevelStandards(0, 150, 175, 190, 217.5, 250, 285),
      125: createLevelStandards(0, 155, 182.5, 197.5, 225, 260, 295),
      140: createLevelStandards(0, 160, 187.5, 205, 232.5, 267.5, 302.5),
      999: createLevelStandards(0, 162.5, 190, 207.5, 235, 272.5, 307.5),
    },
  },

  female: {
    total: {
      44: createLevelStandards(0, 147.5, 177.5, 197.5, 220, 255, 297.5),
      48: createLevelStandards(0, 162.5, 190, 215, 245, 280, 325),
      52: createLevelStandards(0, 177.5, 210, 232.5, 265, 305, 352.5),
      56: createLevelStandards(0, 192.5, 225, 250, 285, 325, 380),
      60: createLevelStandards(0, 205, 237.5, 270, 312.5, 345, 400),
      67.5: createLevelStandards(0, 220, 257.5, 287.5, 325, 372.5, 427.5),
      75: createLevelStandards(0, 230, 275, 305, 340, 395, 457.5),
      82.5: createLevelStandards(0, 247.5, 290, 322.5, 365, 417.5, 480),
      90: createLevelStandards(0, 255, 300, 335, 380, 430, 502.5),
      999: createLevelStandards(0, 262.5, 307.5, 342.5, 387.5, 442.5, 510),
    },

    bench: {
      44: createLevelStandards(0, 27.5, 32.5, 37.5, 40, 47.5, 55),
      48: createLevelStandards(0, 32.5, 37.5, 40, 45, 52.5, 60),
      52: createLevelStandards(0, 35, 40, 45, 50, 57.5, 67.5),
      56: createLevelStandards(0, 37.5, 42.5, 47.5, 55, 62.5, 72.5),
      60: createLevelStandards(0, 40, 47.5, 52.5, 57.5, 67.5, 77.5),
      67.5: createLevelStandards(0, 45, 52.5, 57.5, 65, 75, 85),
      75: createLevelStandards(0, 47.5, 57.5, 62.5, 70, 80, 92.5),
      82.5: createLevelStandards(0, 52.5, 60, 67.5, 75, 85, 97.5),
      90: createLevelStandards(0, 55, 62.5, 70, 77.5, 90, 102.5),
      999: createLevelStandards(0, 57.5, 65, 72.5, 80, 92.5, 107.5),
    },

    deadlift: {
      44: createLevelStandards(0, 72.5, 82.5, 90, 102.5, 117.5, 135),
      48: createLevelStandards(0, 77.5, 90, 97.5, 112.5, 127.5, 147.5),
      52: createLevelStandards(0, 85, 95, 105, 117.5, 135, 155),
      56: createLevelStandards(0, 92.5, 102.5, 112.5, 127.5, 145, 167.5),
      60: createLevelStandards(0, 97.5, 110, 122.5, 137.5, 157.5, 180),
      67.5: createLevelStandards(0, 107.5, 122.5, 135, 152.5, 175, 200),
      75: createLevelStandards(0, 115, 132.5, 147.5, 165, 190, 217.5),
      82.5: createLevelStandards(0, 122.5, 142.5, 157.5, 180, 205, 235),
      90: createLevelStandards(0, 130, 150, 167.5, 190, 217.5, 250),
      999: createLevelStandards(0, 135, 157.5, 175, 197.5, 227.5, 260),
    },
  },
}