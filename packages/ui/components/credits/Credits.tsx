import Link from "next/link";
import { useEffect, useState } from "react";

import { COMPANY_NAME, IS_SELF_HOSTED, IS_CALCOM } from "@calcom/lib/constants";

// Relative to prevent triggering a recompile
import pkg from "../../../../apps/web/package.json";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const vercelCommitHash = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
const commitHash = vercelCommitHash ? `-${vercelCommitHash.slice(0, 7)}` : "";

export const CalComVersion = `v.${pkg.version}-${!IS_SELF_HOSTED ? "h" : "sh"}`;

export default function Credits() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <small className="text-default mx-3 mb-2 mt-1 hidden text-[0.5rem] opacity-50 lg:block">
      &copy; {new Date().getFullYear()}{" "}
      <Link href="https://www.takwim.my" target="_blank" className="hover:underline">
        {COMPANY_NAME}
      </Link>{" "}
      {hasMounted && (
        <>
          
          {vercelCommitHash && IS_CALCOM ? (
            <Link
              href={`https://github.com/alkhairtechnology/rayhana/commit/${vercelCommitHash}`}
              target="_blank"
              className="hover:underline">
              {commitHash}
            </Link>
          ) : (
            commitHash
          )}
        </>
      )}
    </small>
  );
}
