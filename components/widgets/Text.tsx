interface WidgetProps {
  size: 1 | 2 | 4
}

interface TextProps {
  text: string
}

export const TextWidget = ({text}: WidgetProps & TextProps) => {

  return (
    <>
      <p className='w-full h-full items-center'>{ text}</p>
    </>
  )



}

