import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"

const UtterancesComponent = dynamic(
  () => {
    return import("./Utterances")
  },
  { ssr: false }
)

// Cusdis: Disabled due to React 18 incompatibility (requires React 17)
// Uncomment below to re-enable if a compatible version is available
// const CusdisComponent = dynamic(
//   () => {
//     return import("./Cusdis")
//   },
//   { ssr: false }
// )

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {CONFIG.utterances.enable && <UtterancesComponent issueTerm={data.id} />}
      {/* Cusdis disabled - see comment above */}
      {/* {CONFIG.cusdis.enable && (
        <CusdisComponent id={data.id} slug={data.slug} title={data.title} />
      )} */}
    </div>
  )
}

export default CommentBox
