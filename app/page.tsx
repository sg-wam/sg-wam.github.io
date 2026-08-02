import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;
const paperUrl = "#paper-note";

const authors = [
  ["Ruiteng Zhao", "https://scholar.google.com/citations?user=P0TNo5gAAAAJ&hl=3n", "1"],
  ["Zhengshen Zhang", "https://scholar.google.com/citations?user=8nrJ1vsAAAAJ&hl=en", "1"],
  ["Yue Su", "https://scholar.google.com/citations?user=TUVYCcIAAAAJ&hl=en", "2"],
  ["Wenshuo Wang", "https://scholar.google.com/citations?user=PFp3jbAAAAAJ&hl=en", "1"],
  ["Jiahui Li", "https://scholar.google.com/citations?user=bMaupo8AAAAJ&hl=en", "1"],
  ["Zhiyuan Yang", "https://scholar.google.com/citations?user=RZBaKLsAAAAJ&hl=en", "3"],
  ["Francis E. H. Tay", "https://scholar.google.com/citations?user=mfH9UFIAAAAJ&hl=en", "1"],
  ["Marcelo H. Ang Jr.", "https://scholar.google.com/citations?user=dMogb2EAAAAJ&hl=en", "1"],
  ["Haiyue Zhu", "https://scholar.google.com/citations?user=uO_R9wQAAAAJ&hl=en", "4,†"],
] as const;

const affiliations = [
  ["1", "Advanced Robotics Centre, National University of Singapore"],
  ["2", "MMLab, The University of Hong Kong"],
  ["3", "Nanyang Technological University"],
  [
    "4",
    "Singapore Institute of Manufacturing Technology, Agency for Science, Technology and Research (A*STAR)",
  ],
] as const;

const institutions = [
  ["National University of Singapore", "/nus-logo-clean.png", "nus"],
  ["Nanyang Technological University", "/ntu-logo-clean.png", "ntu"],
  ["The University of Hong Kong", "/hku-logo-cropped.png", "hku"],
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

const liberoRows = [
  ["OpenVLA-OFT", "7B", "Y", "97.6", "98.4", "97.9", "94.5", "97.1"],
  ["pi0", "3.3B", "Y", "98.0", "96.8", "94.4", "88.4", "94.4"],
  ["pi0-FAST", "3.3B", "Y", "96.4", "96.8", "88.6", "60.2", "85.5"],
  ["pi0.5", "3.3B", "Y", "98.8", "98.2", "98.0", "92.4", "96.9"],
  ["GR00T N1.6", "3B", "Y", "97.7", "98.5", "97.5", "94.4", "97.0"],
  ["Spatial Forcing", "7B", "Y", "99.4", "99.6", "98.8", "96.0", "98.5"],
  ["WorldVLA", "7B", "N", "87.6", "96.2", "83.4", "60.0", "81.8"],
  ["LAPA", "7B", "Y", "55.4", "58.8", "74.6", "73.8", "65.7"],
  ["RynnVLA-002", "7B", "N", "99.0", "99.8", "96.4", "94.4", "97.4"],
  ["Mantis", "5.8B", "Y", "98.8", "99.2", "94.4", "94.2", "96.7"],
  ["UniVLA", "7B", "Y", "96.5", "96.8", "95.6", "92.0", "95.2"],
  ["Fast-WAM", "6B", "N", "98.2", "100.0", "97.0", "95.2", "97.6"],
  ["VLA-JEPA", "2B", "N", "94.8", "99.6", "95.8", "94.0", "96.1"],
  ["SG-WAM", "0.9B", "N", "99.4", "99.8", "98.6", "96.2", "98.5"],
] as const;

const liberoPlusRows = [
  ["WorldVLA", "7B", "0.1", "27.9", "41.6", "43.7", "17.1", "10.9", "38.0", "25.0"],
  ["Spatial Forcing", "7B", "20.1", "13.4", "40.9", "29.1", "33.4", "25.7", "39.3", "29.1"],
  ["Mantis", "5.8B", "15.7", "41.8", "45.9", "45.1", "28.9", "39.2", "62.5", "39.8"],
  ["UniVLA", "7B", "4.3", "50.3", "71.8", "59.1", "80.0", "25.3", "34.3", "41.5"],
  ["Fast-WAM", "6B", "16.4", "44.5", "68.9", "78.2", "53.7", "37.7", "60.7", "50.0"],
  ["pi0", "3.3B", "13.8", "6.0", "58.8", "85.0", "81.4", "79.0", "68.9", "53.6"],
  ["VLA-JEPA", "2B", "40.3", "55.7", "72.9", "88.2", "70.5", "38.2", "74.6", "62.9"],
  ["OpenVLA-OFT", "7B", "56.4", "31.9", "79.5", "88.7", "93.3", "75.8", "74.2", "69.6"],
  ["SG-WAM", "0.9B", "58.6", "48.9", "81.4", "89.8", "86.1", "80.7", "74.2", "73.0"],
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
  ["Pick and Place - In-Distribution", "/video/real_deployment_exp/d24d226f7f8d8051deb5aba14b037502.mp4"],
  ["Pick and Place - Background Shift", "/video/real_deployment_exp/f1e76ffffa17323b17b3cf93c5b409ca.mp4"],
  ["Pick and Place - Light Change", "/video/real_deployment_exp/56981ef9461afa6f53938f1936740a57.mp4"],
  ["Pick and Place - Novel Object", "/video/real_deployment_exp/2729c09e61335607f39be93cd605cecb.mp4"],
  ["Towel Folding - In-Distribution", "/video/real_deployment_exp/d232119f9ccfed6f429dbd14faa0836c.mp4"],
  ["Towel Folding - Background Shift", "/video/real_deployment_exp/ood.mp4"],
  ["Towel Folding - Light Change", "/video/real_deployment_exp/9ad9cb74b4c3ac244c0a6b2e2f4a3b41.mp4"],
  ["Towel Folding - Novel Object", "/video/real_deployment_exp/e4a628445d3247f2c4bcf6a3200b52ee.mp4"],
  ["Toolbox Organization - In-Distribution", "/video/real_deployment_exp/a77f18e9953e0c8ef1a9ce7ea2cf626e.mp4"],
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
          <a href="#abstract">Overview</a>
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
            {authors.map(([name, url, affiliation]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                {name}
                <sup>{affiliation}</sup>
              </a>
            ))}
          </div>
          <div className="affiliations" aria-label="Affiliations">
            {affiliations.map(([index, label]) => (
              <p key={index}>
                <sup>{index}</sup>
                {label}
              </p>
            ))}
            <p>
              <sup>†</sup>
              Corresponding author
            </p>
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
          <div className="institution-logos institution-logos--astar" aria-label="Institutions">
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
          <div className="links" id="paper">
            <a href={paperUrl}>Paper</a>
            <a href="#citation">Bibtex</a>
            <a href="#paper-note">Code</a>
          </div>
          <p className="link-note" id="paper-note">arXiv paper and code links will be added upon release.</p>
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
          <div className="table-wrap benchmark-table">
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Params</th>
                  <th>Embodied PT.</th>
                  <th>Spatial</th>
                  <th>Object</th>
                  <th>Goal</th>
                  <th>Long</th>
                  <th>Avg.</th>
                </tr>
              </thead>
              <tbody>
                {liberoRows.map(([method, ...values]) => (
                  <tr key={method} className={method === "SG-WAM" ? "highlight-row" : ""}>
                    <th>{method}</th>
                    {values.map((value, index) => (
                      <td key={`${method}-${index}`}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="table-title">LIBERO-Plus</h4>
          <div className="table-wrap benchmark-table">
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Params</th>
                  <th>Camera</th>
                  <th>Robot</th>
                  <th>Language</th>
                  <th>Light</th>
                  <th>Background</th>
                  <th>Noise</th>
                  <th>Layout</th>
                  <th>Overall</th>
                </tr>
              </thead>
              <tbody>
                {liberoPlusRows.map(([method, ...values]) => (
                  <tr key={method} className={method === "SG-WAM" ? "highlight-row" : ""}>
                    <th>{method}</th>
                    {values.map((value, index) => (
                      <td key={`${method}-${index}`}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
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
                  <th>In-Distribution</th>
                  <th>Background Shift</th>
                  <th>Light Change</th>
                  <th>Novel Object</th>
                  <th>In-Distribution</th>
                  <th>Background Shift</th>
                  <th>Light Change</th>
                  <th>Novel Object</th>
                  <th>In-Distribution</th>
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
              We evaluated SG-WAM in both simulation and real-world deployment.
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
