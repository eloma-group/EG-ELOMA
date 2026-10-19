import { Link } from 'react-router-dom'

// Microsoft licensing is sold in Australia only; Microsoft development is offered in every country we serve.
export default function GeoNote({ short }: { short?: boolean }) {
  if (short) {
    return (
      <p className="geo-note"><b>Australia only.</b> Microsoft licensing is supplied to Australian businesses. Microsoft development is available in all five countries.</p>
    )
  }
  return (
    <p className="geo-note"><b>Australia only.</b> Microsoft licensing and Microsoft 365 subscriptions are supplied to Australian businesses. In the US, Canada, the UK and New Zealand we provide <Link to="/microsoft-development">Microsoft development</Link> on the licences you already hold.</p>
  )
}
