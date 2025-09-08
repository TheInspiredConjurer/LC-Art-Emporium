import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contactme')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contactme"!</div>
}
