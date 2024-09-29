import CoordinateTrainer from '../../components/CoordinateTrainer'
import LessonLayout from '../../components/LessonLayout'

const theory = (
  <div>
    <p>The chess board is divided into 64 squares, arranged in an 8x8 grid.</p>
    <p>Each square is identified by its file (a-h) and rank (1-8).</p>
    <p>Files run vertically from white's left (a) to right (h).</p>
    <p>Ranks run horizontally from white's first rank (1) to the eighth rank (8).</p>
    <p>Practice identifying these coordinates quickly to improve your chess skills!</p>
  </div>
)

export default function CoordinateTrainerPage() {
  return (
    <LessonLayout
      title="Coordinate Trainer"
      theory={theory}
      lessonId="coordinate-trainer"
    >
      <CoordinateTrainer />
    </LessonLayout>
  )
}