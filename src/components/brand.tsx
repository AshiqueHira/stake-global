import { assetPath } from "@/lib/paths";
import Link from "next/link";
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Stake Global home">
      <img
        src={assetPath("/assets/stake-logo.webp")}
        width="59"
        height="62"
        alt="Stake Global"
      />
      <span className="brand-text" aria-hidden="true">
        STAKE<small>GLOBAL</small>
      </span>
    </Link>
  );
}
