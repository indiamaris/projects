import Picture from "@components/ui/picture/picture.tsx"
import image from "@public/images/india.png"
export default function Me() {
  return (
    <div>
    <Picture extraStyleContainer={'pictureContainer'} image={image} />
    </div>
  )
}