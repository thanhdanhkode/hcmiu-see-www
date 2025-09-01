export const Section = (props: { children: React.ReactNode; id?: string }) => {
  return (
    <section
      id={props.id}
      className="px-3 py-8"
    >
      <div className="mx-auto max-w-screen-xl">{props.children}</div>
    </section>
  )
}
