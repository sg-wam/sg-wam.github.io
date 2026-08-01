import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const authors = [
  ["Ruiteng Zhao", "https://openreview.net/profile?id=~Ruiteng_Zhao1"],
  ["Zhengshen Zhang", "https://openreview.net/profile?id=~Zhengshen_Zhang1"],
  ["Yue Su", "https://openreview.net/profile?id=~Yue_Su1"],
  ["Wenshuo Wang", "https://openreview.net/profile?id=~Wenshuo_Wang8"],
  ["Jiahui Li", "https://openreview.net/profile?id=~Jiahui_Li10"],
  ["Zhiyuan Yang", "https://openreview.net/profile?id=~Zhiyuan_Yang6"],
  ["Francis E. H. Tay", "https://openreview.net/profile?id=~Francis_E._H._Tay1"],
  ["Marcelo H. Ang Jr", "https://openreview.net/profile?id=~Marcelo_H_Ang_Jr1"],
  ["Haiyue Zhu", "https://openreview.net/profile?id=~Haiyue_Zhu1"],
] as const;

const institutions = [
  ["National University of Singapore", "/nus-logo-clean.png", "nus"],
  ["Nanyang Technological University", "/ntu-logo-clean.png", "ntu"],
  ["The University of Hong Kong", "/hku-logo-cropped.png", "hku"],
] as const;

const keywords = [
  "Vision-Language-Action",
  "World Action Modeling",
  "Geometry-Aware Policy",
  "Robotic Manipulation",
  "Latent Dynamics",
] as const;

const bibtex = `@misc{zhao2027sgwam,
  title  = {SG-WAM: Self-Guided World Modeling in
            Geometry-Aware Policy Space},
  author = {Zhao, Ruiteng and Zhang, Zhengshen and Su, Yue
            and Wang, Wenshuo and Li, Jiahui and Yang, Zhiyuan
            and Tay, Francis E. H. and Ang, Jr., Marcelo H.
            and Zhu, Haiyue},
  year   = {2027}
}`;

const realWorldRows = [
  ["VLA-JEPA", "35%", "20%", "25%", "20%", "20%", "10%", "10%", "15%", "20%"],
  ["VPP", "30%", "15%", "10%", "10%", "35%", "15%", "15%", "10%", "30%"],
  ["SG-WAM", "75%", "55%", "60%", "40%", "45%", "25%", "35%", "25%", "50%"],
] as const;

const liberoVideos = [
  ["Camera Viewpoint", "/video/libero_exp/ce8b996470bc2c749b9dbc44b7e49be0.mp4"],
  ["Sensor Noise", "/video/libero_exp/ac1789a6692939716fcbb8d6274d083b.mp4"],
  ["Robot Initial State", "/video/libero_exp/a47277add93ed9751d3351cb96c5cdfb.mp4"],
  ["Object Layout", "/video/libero_exp/9d60af3bbc2e0b6e7ff6930076821f9d.mp4"],
  ["Language Instruction", "/video/libero_exp/8f7096fb6c0bf95eeef57c3819587258.mp4"],
  ["Background Texture", "/video/libero_exp/3679dae9765765efe8f453149c4095c4.mp4"],
  ["Light Condition", "/video/libero_exp/15bedb32c71a874d2ea9cd387570cc83.mp4"],
] as const;

const realDeploymentVideos = [
  ["Pick and Place", "/video/real_deployment_exp/d24d226f7f8d8051deb5aba14b037502.mp4"],
  ["Pick and Place - Background", "/video/real_deployment_exp/f1e76ffffa17323b17b3cf93c5b409ca.mp4"],
  ["Pick and Place - Light", "/video/real_deployment_exp/56981ef9461afa6f53938f1936740a57.mp4"],
  ["Pick and Place - Novel Object", "/video/real_deployment_exp/2729c09e61335607f39be93cd605cecb.mp4"],
  ["Towel Folding", "/video/real_deployment_exp/d232119f9ccfed6f429dbd14faa0836c.mp4"],
  ["Towel Folding - Background", "/video/real_deployment_exp/ood.mp4"],
  ["Towel Folding - Light", "/video/real_deployment_exp/9ad9cb74b4c3ac244c0a6b2e2f4a3b41.mp4"],
  ["Towel Folding - Novel Object", "/video/real_deployment_exp/e4a628445d3247f2c4bcf6a3200b52ee.mp4"],
  ["Toolbox Organization", "/video/real_deployment_exp/a77f18e9953e0c8ef1a9ce7ea2cf626e.mp4"],
] as const;

function ExperimentVideoCard({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  return (
    <article className="experiment-video-card">
      <video controls muted loop playsInline preload="metadata">
        <source src={asset(src)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>{title}</h3>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">SG-WAM</a>
        <nav aria-label="Page sections">
          <a href="#abstract">Abstract</a>
          <a href="#method">Method</a>
          <a href="#results">Results</a>
          <a href="#citation">Citation</a>
        </nav>
      </header>

      <article>
        <section className="hero" id="top">
          <div className="project-logo" aria-hidden="true">
            <span>SG</span>
            <span>WAM</span>
          </div>
          <h1>SG-WAM: Self-Guided World Modeling in Geometry-Aware Policy Space</h1>
          <p className="subtitle">
            Predicting future dynamics where actions are generated.
          </p>
          <div className="authors" aria-label="Authors">
            {authors.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>
            ))}
          </div>
          <p className="affiliation">
            A*STAR · National University of Singapore · Nanyang Technological
            University · The University of Hong Kong
          </p>
          <div className="institution-logos" aria-label="Institutions">
            <span className="institution-logo institution-logo--lead">
              <Image
                className="institution-logo__image institution-logo__image--astar"
                src={asset("/astar-logo.png")}
                width={220}
                height={92}
                alt="A*STAR logo"
              />
            </span>
          </div>
          <div className="institution-logos institution-logos--schools" aria-label="Universities">
            {institutions.map(([name, image, slug]) => (
              <span className="institution-logo" key={name}>
                <Image
                  className={`institution-logo__image institution-logo__image--${slug}`}
                  src={asset(image)}
                  width={220}
                  height={92}
                  alt={`${name} logo`}
                />
              </span>
            ))}
          </div>
          <div className="keywords" aria-label="Research keywords">
            {keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
          <div className="links" id="paper">
            <a href={asset("/sg-wam-overview.pdf")}>Overview</a>
            <a href="#citation">BibTeX</a>
            <a href="#paper-note">Code</a>
          </div>
          <p className="link-note" id="paper-note">Paper and code links will be added upon release.</p>
        </section>

        <section className="hero-media" aria-label="SG-WAM visual overview">
          <div className="video-frame">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
            >
              <source src={asset("/video/aaai_demo.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="section" id="abstract">
          <h2>Overview</h2>
          <figure className="embedded-figure embedded-figure--intro">
            <Image
              src={asset("/intro.png")}
              width={1836}
              height={1008}
              alt="Introductory overview of SG-WAM"
            />
            <figcaption>
              SG-WAM models future dynamics directly in a geometry-aware
              representation shared with the policy.
            </figcaption>
          </figure>
          <p>
            World Action Models should predict what changes, where it changes,
            and how those changes inform the next robot action. Existing
            approaches often model either expensive observation-space targets or
            auxiliary latents that are not fully aligned with the acting policy.
          </p>
          <p>
            SG-WAM learns action-conditioned future dynamics inside the
            policy-derived representation space and grounds that space with
            geometric supervision. With a 0.9B model and no large-scale embodied
            pretraining, it reaches 98.5% on LIBERO and 73.0% on LIBERO-Plus.
          </p>
        </section>

        <section className="section" id="method">
          <h2>Framework</h2>
          <p className="section-lead">
            SG-WAM unifies latent future prediction, geometric grounding, and
            action generation in the policy representation space.
          </p>
          <figure className="embedded-figure embedded-figure--method">
            <Image
              src={asset("/sg-wam-overview.png")}
              width={1836}
              height={810}
              alt="SG-WAM framework overview"
            />
            <figcaption>
              Overview of SG-WAM. The model predicts action-conditioned future
              dynamics in the geometry-aware policy representation space.
            </figcaption>
          </figure>
          <div className="method-grid">
            <div>
              <h3>Policy-derived dynamics</h3>
              <p>Learnable dynamics tokens collect policy-relevant context and model how the scene evolves under action.</p>
            </div>
            <div>
              <h3>Self-guided prediction</h3>
              <p>An EMA copy of the policy supplies stable future targets in the same representation family used to act.</p>
            </div>
            <div>
              <h3>Geometric grounding</h3>
              <p>Geometric supervision gives policy image tokens spatial structure without adding inference-time cost.</p>
            </div>
          </div>
        </section>

        <section className="section" id="results">
          <h2>Experiment</h2>
          <p className="section-lead">
            A 0.9B SG-WAM model achieves strong in-distribution performance and
            robust zero-shot transfer without large-scale embodied pretraining.
          </p>
          <div className="result-summary">
            <div><strong>98.5%</strong><span>LIBERO average success</span></div>
            <div><strong>73.0%</strong><span>LIBERO-Plus zero-shot</span></div>
            <div><strong>0.9B</strong><span>model parameters</span></div>
          </div>

          <h3 className="table-title table-title--major">Simulation Benchmarks</h3>
          <p className="table-note">
            SG-WAM is trained once and evaluated across in-distribution and
            zero-shot transfer settings.
          </p>

          <h4 className="table-title">LIBERO</h4>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Spatial</th><th>Object</th><th>Goal</th><th>Long</th><th>Average</th></tr></thead>
              <tbody><tr><td>99.4</td><td>99.8</td><td>98.6</td><td>96.2</td><td><strong>98.5</strong></td></tr></tbody>
            </table>
          </div>

          <h4 className="table-title">LIBERO-Plus</h4>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Camera</th><th>Robot</th><th>Language</th><th>Light</th><th>Background</th><th>Noise</th><th>Layout</th><th>Average</th></tr></thead>
              <tbody><tr><td>58.6</td><td>48.9</td><td>81.4</td><td>89.8</td><td>86.1</td><td>80.7</td><td>74.2</td><td><strong>73.0</strong></td></tr></tbody>
            </table>
          </div>

          <h3 className="table-title table-title--major">Real-world evaluation</h3>
          <p className="table-note">
            Success rates under different visual perturbations. SG-WAM is shown
            in bold.
          </p>
          <div className="table-wrap real-world-table">
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Model</th>
                  <th colSpan={4}>Pick and Place</th>
                  <th colSpan={4}>Towel Folding</th>
                  <th>Toolbox Organization</th>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>Background</th>
                  <th>Light Change</th>
                  <th>Novel Object</th>
                  <th>ID</th>
                  <th>Background</th>
                  <th>Light Change</th>
                  <th>Novel Object</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {realWorldRows.map(([model, ...values]) => (
                  <tr key={model} className={model === "SG-WAM" ? "highlight-row" : ""}>
                    <th>{model}</th>
                    {values.map((value, index) => (
                      <td key={`${model}-${index}`}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="experiment-figures">
            <h3>Geometry Attention</h3>
            <figure className="embedded-figure embedded-figure--compact">
              <Image
                src={asset("/complete-attention-map.png")}
                width={2769}
                height={726}
                alt="Complete geometry attention map visualization from the appendix"
              />
              <figcaption>
                Complete visualization of geometry-aware attention from the
                appendix.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="video-showcase" aria-label="Experiment videos">
          <div className="video-showcase__heading">
            <h2>Experiment Videos</h2>
            <p>
              Rollout examples from the simulation and real-world experiments
              described in the AAAI 2027 manuscript.
            </p>
          </div>

          <div className="video-group">
            <h3>LIBERO-Plus Zero-Shot Perturbations</h3>
            <div className="experiment-video-grid experiment-video-grid--compact">
              {liberoVideos.map(([title, src]) => (
                <ExperimentVideoCard key={title} title={title} src={src} />
              ))}
            </div>
          </div>

          <div className="video-group">
            <h3>Real-World Deployment</h3>
            <div className="experiment-video-grid">
              {realDeploymentVideos.map(([title, src]) => (
                <ExperimentVideoCard key={title} title={title} src={src} />
              ))}
            </div>
          </div>
        </section>

        <section className="section citation" id="citation">
          <h2>Citation</h2>
          <pre><code>{bibtex}</code></pre>
        </section>
      </article>

      <footer><p>SG-WAM · Self-Guided World Modeling in Geometry-Aware Policy Space</p></footer>
    </main>
  );
}
