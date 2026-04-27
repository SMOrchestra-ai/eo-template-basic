export default function Home() {
  return (
    <main>
      <span className="eo-mark">Entrepreneurs Oasis · MENA</span>
      <h1>
        Your MicroSaaS
        <br />
        foundation is live.
      </h1>
      <p className="lead">
        This server is yours. The container is provisioned, the domain points to
        it, and the rest is in your hands. Ship something the market can&apos;t
        copy.
      </p>

      <div className="card">
        <h3>What just happened</h3>
        <p>
          You picked a tier, EO allocated a slot from the pool, Coolify spun
          this container up on hardened infrastructure, and you landed here.
          Total time from click to live: under 60 seconds.
        </p>
      </div>

      <div className="card">
        <h3>Replace this page</h3>
        <p>
          Edit <code>src/app/page.tsx</code> and push to your repo. Coolify
          auto-deploys on every push to <code>main</code>. No SSH, no DevOps, no
          excuses.
        </p>
      </div>

      <div className="card">
        <h3>What&apos;s wired up</h3>
        <p>
          Next.js 14 standalone build, Dockerfile multi-stage, container
          CPU/memory limits per your tier, automatic HTTPS via Let&apos;s
          Encrypt, Traefik reverse proxy, hardened Ubuntu host (UFW + fail2ban +
          unattended-upgrades).
        </p>
      </div>

      <footer>
        Powered by{" "}
        <a href="https://entrepreneursoasis.me">Entrepreneurs Oasis MENA</a>.
        Hosted on EO infra · server.entrepreneursoasis.me
      </footer>
    </main>
  );
}
