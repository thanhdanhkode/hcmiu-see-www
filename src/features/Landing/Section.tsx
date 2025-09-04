export const Section = (props: { children: React.ReactNode; id?: string }) => {
  return (
    <section
      id={props.id}
      className="w-full py-8"
    >
      <div className="mx-auto px-3 max-w-screen-xl">{props.children}</div>
    </section>
  )
}
