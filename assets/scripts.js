const _0x5826d4=_0x2ed9;!(function(e,t){const n=_0x2ed9,a=_0x2314();for(;;)try{if(334856===parseInt(n(437))/1+parseInt(n(454))/2+(parseInt(n(284))/3)*(-parseInt(n(198))/4)+(-parseInt(n(351))/5)*(parseInt(n(242))/6)+(parseInt(n(194))/7)*(parseInt(n(417))/8)+parseInt(n(231))/9+(-parseInt(n(422))/10)*(parseInt(n(383))/11))break;a.push(a.shift());}catch(e){a.push(a.shift());}})();
import * as _0x386f71 from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
const scene=new _0x386f71.Scene();scene[_0x5826d4(307)]=new _0x386f71.FogExp2(0,0.0015);const camera=new _0x386f71[_0x5826d4(176)](75,window.innerWidth/window[_0x5826d4(174)],0.1,1e5);
camera[_0x5826d4(397)][_0x5826d4(281)](0, 20, 30);
const renderer = new _0x386f71[_0x5826d4(354)]({ antialias: !0 });
renderer[_0x5826d4(303)](window[_0x5826d4(415)], window[_0x5826d4(174)]),
  renderer[_0x5826d4(203)](Math[_0x5826d4(173)](window.devicePixelRatio, 2)),
  (renderer[_0x5826d4(357)] = _0x386f71[_0x5826d4(442)]),
  document[_0x5826d4(290)](_0x5826d4(240)).appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer[_0x5826d4(285)]);
function createGlowMaterial(e, t = 128, n = 0.55) {
  const a = _0x5826d4,
    o = document[a(319)]("canvas");
  o[a(366)] = o[a(268)] = t;
  const r = o.getContext("2d"),
    i = r[a(179)](t / 2, t / 2, 0, t / 2, t / 2, t / 2);
  i.addColorStop(0, e),
    i.addColorStop(1, a(305)),
    (r[a(394)] = i),
    r[a(416)](0, 0, t, t);
  const s = new _0x386f71[a(312)](o),
    d = new _0x386f71.SpriteMaterial({
      map: s,
      transparent: !0,
      opacity: n,
      depthWrite: !1,
      blending: _0x386f71[a(461)],
    });
  return new _0x386f71[a(206)](d);
}
(controls[_0x5826d4(339)] = !0),
  (controls.autoRotate = !0),
  (controls[_0x5826d4(300)] = 0.2),
  (controls[_0x5826d4(409)] = !1),
  controls[_0x5826d4(186)][_0x5826d4(281)](0, 0, 0),
  (controls[_0x5826d4(406)] = !1),
  (controls[_0x5826d4(347)] = 15),
  (controls[_0x5826d4(423)] = 300),
  (controls[_0x5826d4(463)] = 0.3),
  (controls[_0x5826d4(218)] = 0.3),
  controls.update();
const centralGlow = createGlowMaterial("rgba(255,255,255,0.8)", 156, 0.25);
centralGlow.scale[_0x5826d4(281)](8, 8, 1), scene[_0x5826d4(472)](centralGlow);
for (let e = 0; e < 15; e++) {
  const e = 360 * Math[_0x5826d4(317)](),
    t = _0x5826d4(188) + e + ",80%,50%,0.6)",
    n = createGlowMaterial(t, 256);
  n[_0x5826d4(349)][_0x5826d4(281)](100, 100, 1),
    n[_0x5826d4(397)].set(
      175 * (Math[_0x5826d4(317)]() - 0.5),
      175 * (Math[_0x5826d4(317)]() - 0.5),
      175 * (Math.random() - 0.5)
    ),
    scene[_0x5826d4(472)](n);
}
const galaxyParameters = {
  count: 1e5,
  arms: 6,
  radius: 100,
  spin: 0.5,
  randomness: 0.2,
  randomnessPower: 20,
  insideColor: new _0x386f71[_0x5826d4(434)](14040790),
  outsideColor: new _0x386f71.Color(4765880),
};
function decodeBase64Unicode(e) {
  const t = _0x5826d4;
  try {
    return decodeURIComponent(
      atob(e)
        [t(238)]("")
        [t(189)]((e) => "%" + ("00" + e[t(224)](0).toString(16))[t(474)](-2))
        [t(195)]("")
    );
  } catch (e) {
    return console[t(464)](t(395), e), "";
  }
}
function getHeartImagesFromURL() {
  const e = _0x5826d4,
    t = new URLSearchParams(window[e(172)].search).get("id");
  if (t) {
    return decodeBase64Unicode(t)
      [e(238)](",")
      [e(189)]((t) => t[e(335)]())
      [e(191)](Boolean);
  }
  return [];
}
function getRingTextsFromURL() {
  const e = _0x5826d4,
    t = new URLSearchParams(window[e(172)][e(449)])[e(228)](e(298));
  if (t) {
    return decodeBase64Unicode(t)
      [e(238)](",")
      .map((t) => t[e(335)]())
      [e(191)](Boolean);
  }
  return ["Love", e(258)];
}
const heartImages = getHeartImagesFromURL(),
  ringTexts = getRingTextsFromURL();
function getMusicFromURL() {
  const e = _0x5826d4;
  return (
    new URLSearchParams(window.location[e(449)])[e(228)](e(193)) || "./a.mp3"
  );
}
window[_0x5826d4(369)] = { data: { ringTexts: ringTexts } };
const selectedMusic = getMusicFromURL();
if (selectedMusic) {
  const e = document.createElement(_0x5826d4(233));
  (e.src = selectedMusic),
    (e.loop = !0),
    (e[_0x5826d4(401)] = !1),
    (e[_0x5826d4(207)][_0x5826d4(374)] = "none"),
    document[_0x5826d4(297)].appendChild(e);
  const t = document[_0x5826d4(319)](_0x5826d4(438));
  (t.id = _0x5826d4(221)),
    (t.className = "text-white btn-audio-toggle"),
    (t[_0x5826d4(207)][_0x5826d4(397)] = "absolute"),
    (t.style[_0x5826d4(244)] = _0x5826d4(213)),
    (t[_0x5826d4(207)].right = _0x5826d4(213)),
    (t[_0x5826d4(207)].zIndex = _0x5826d4(271));
  const n = document[_0x5826d4(319)]("i");
  (n.id = _0x5826d4(361)),
    (n[_0x5826d4(447)] = _0x5826d4(435)),
    t[_0x5826d4(274)](n),
    document[_0x5826d4(297)].appendChild(t);
  const a = () => {
    const t = _0x5826d4;
    e.play().catch((e) => {
      const t = _0x2ed9;
      console[t(282)](t(432), e);
    }),
      document.removeEventListener(t(427), a);
  };
  document.addEventListener(_0x5826d4(427), a),
    t[_0x5826d4(309)]("click", () => {
      const t = _0x5826d4;
      e[t(401)]
        ? ((e.muted = !1), (n[t(447)] = t(435)))
        : ((e[t(401)] = !0), (n[t(447)] = "fa-solid fa-volume-xmark"));
    });
}
const textureLoader = new _0x386f71[_0x5826d4(340)](),
  numGroups = heartImages.length,
  maxDensity = 15e3,
  minDensity = 4e3,
  maxGroupsForScale = 6;
let pointsPerGroup;
if (numGroups <= 1) pointsPerGroup = maxDensity;
else if (numGroups >= maxGroupsForScale) pointsPerGroup = minDensity;
else {
  const e = (numGroups - 1) / (maxGroupsForScale - 1);
  pointsPerGroup = Math.floor(maxDensity * (1 - e) + minDensity * e);
}
pointsPerGroup * numGroups > galaxyParameters[_0x5826d4(202)] &&
  (pointsPerGroup = Math[_0x5826d4(410)](galaxyParameters.count / numGroups)),
  console[_0x5826d4(379)](
    "Số lượng ảnh: " + numGroups + _0x5826d4(190) + pointsPerGroup
  );
const positions = new Float32Array(3 * galaxyParameters[_0x5826d4(202)]),
  colors = new Float32Array(3 * galaxyParameters[_0x5826d4(202)]);
let pointIdx = 0;
for (let e = 0; e < galaxyParameters.count; e++) {
  const t =
      Math[_0x5826d4(299)](
        Math[_0x5826d4(317)](),
        galaxyParameters[_0x5826d4(429)]
      ) * galaxyParameters.radius,
    n =
      ((e % galaxyParameters[_0x5826d4(441)]) / galaxyParameters.arms) *
      Math.PI *
      2,
    a = t * galaxyParameters[_0x5826d4(471)],
    o = (Math.random() - 0.5) * galaxyParameters[_0x5826d4(263)] * t,
    r =
      (Math[_0x5826d4(317)]() - 0.5) *
      galaxyParameters[_0x5826d4(263)] *
      t *
      0.5,
    i = (Math[_0x5826d4(317)]() - 0.5) * galaxyParameters[_0x5826d4(263)] * t,
    s = n + a;
  if (t < 30 && Math[_0x5826d4(317)]() < 0.7) continue;
  const d = 3 * pointIdx;
  (positions[d] = Math[_0x5826d4(334)](s) * t + o),
    (positions[d + 1] = r),
    (positions[d + 2] = Math[_0x5826d4(310)](s) * t + i);
  const l = new _0x386f71.Color(16738047);
  l[_0x5826d4(304)](
    new _0x386f71.Color(6750207),
    t / galaxyParameters[_0x5826d4(217)]
  ),
    l[_0x5826d4(251)](0.7 + 0.3 * Math[_0x5826d4(317)]()),
    (colors[d] = l.r),
    (colors[d + 1] = l.g),
    (colors[d + 2] = l.b),
    pointIdx++;
}
const galaxyGeometry = new _0x386f71[_0x5826d4(272)]();
galaxyGeometry[_0x5826d4(249)](
  _0x5826d4(397),
  new _0x386f71[_0x5826d4(254)](positions[_0x5826d4(474)](0, 3 * pointIdx), 3)
),
  galaxyGeometry[_0x5826d4(249)](
    _0x5826d4(295),
    new _0x386f71.BufferAttribute(colors.slice(0, 3 * pointIdx), 3)
  );
const galaxyMaterial = new _0x386f71[_0x5826d4(444)]({
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 50 * renderer[_0x5826d4(325)]() },
      uRippleTime: { value: -1 },
      uRippleSpeed: { value: 40 },
      uRippleWidth: { value: 20 },
    },
    vertexShader: _0x5826d4(245),
    fragmentShader: _0x5826d4(430),
    blending: _0x386f71[_0x5826d4(461)],
    depthWrite: !1,
    transparent: !0,
    vertexColors: !0,
  }),
  galaxy = new _0x386f71[_0x5826d4(420)](galaxyGeometry, galaxyMaterial);
function createNeonTexture(e, t) {
  const n = _0x5826d4,
    a = window[n(237)] || 1,
    o = document[n(319)]("canvas");
  (o.width = o[n(268)] = t * a),
    (o[n(207)][n(366)] = o[n(207)][n(268)] = t + "px");
  const r = o.getContext("2d");
  r[n(349)](a, a);
  const i = e[n(366)] / e[n(268)];
  let s, d, l, c;
  i > 1
    ? ((s = t), (d = t / i), (l = 0), (c = (t - d) / 2))
    : ((d = t), (s = t * i), (l = (t - s) / 2), (c = 0)),
    r[n(171)](0, 0, t, t);
  const x = 0.1 * t;
  r[n(396)](),
    r[n(358)](),
    r[n(226)](l + x, c),
    r[n(208)](l + s - x, c),
    r[n(411)](l + s, c, l + s, c + x, x),
    r.lineTo(l + s, c + d - x),
    r[n(411)](l + s, c + d, l + s - x, c + d, x),
    r[n(208)](l + x, c + d),
    r[n(411)](l, c + d, l, c + d - x, x),
    r[n(208)](l, c + x),
    r[n(411)](l, c, l + x, c, x),
    r[n(205)](),
    r[n(261)](),
    r[n(322)](e, l, c, s, d),
    r[n(289)]();
  const m = new _0x386f71.CanvasTexture(o);
  return (
    (m[n(311)] = _0x386f71[n(308)]),
    (m[n(359)] = _0x386f71.LinearFilter),
    (m[n(440)] = renderer[n(453)][n(372)]()),
    (m[n(337)] = _0x386f71[n(442)]),
    m
  );
}
scene[_0x5826d4(472)](galaxy);
for (let e = 0; e < numGroups; e++) {
  const t = new Float32Array(3 * pointsPerGroup),
    n = new Float32Array(3 * pointsPerGroup),
    a = new Float32Array(3 * pointsPerGroup);
  let o = 0;
  for (let r = 0; r < pointsPerGroup; r++) {
    const i = 3 * o,
      s = e * pointsPerGroup + r,
      d =
        Math[_0x5826d4(299)](
          Math[_0x5826d4(317)](),
          galaxyParameters[_0x5826d4(429)]
        ) * galaxyParameters[_0x5826d4(217)];
    if (d < 30) continue;
    const l =
        ((s % galaxyParameters[_0x5826d4(441)]) / galaxyParameters.arms) *
        Math.PI *
        2,
      c = d * galaxyParameters[_0x5826d4(471)],
      x = (Math[_0x5826d4(317)]() - 0.5) * galaxyParameters[_0x5826d4(263)] * d,
      m =
        (Math[_0x5826d4(317)]() - 0.5) *
        galaxyParameters[_0x5826d4(263)] *
        d *
        0.5,
      _ = (Math.random() - 0.5) * galaxyParameters[_0x5826d4(263)] * d,
      u = l + c;
    (t[i] = Math[_0x5826d4(334)](u) * d + x),
      (t[i + 1] = m),
      (t[i + 2] = Math.sin(u) * d + _);
    const p = new _0x386f71.Color(16777215);
    (n[i] = p.r), (n[i + 1] = p.g), (n[i + 2] = p.b);
    const f = galaxyParameters[_0x5826d4(210)][_0x5826d4(329)]();
    f[_0x5826d4(304)](
      galaxyParameters.outsideColor,
      d / galaxyParameters[_0x5826d4(217)]
    ),
      f[_0x5826d4(251)](0.7 + 0.3 * Math[_0x5826d4(317)]()),
      (a[i] = f.r),
      (a[i + 1] = f.g),
      (a[i + 2] = f.b),
      o++;
  }
  if (0 === o) continue;
  const r = new _0x386f71.BufferGeometry();
  r[_0x5826d4(249)](
    _0x5826d4(397),
    new _0x386f71[_0x5826d4(254)](t.slice(0, 3 * o), 3)
  ),
    r[_0x5826d4(249)](
      _0x5826d4(295),
      new _0x386f71[_0x5826d4(254)](n[_0x5826d4(474)](0, 3 * o), 3)
    );
  const i = new _0x386f71[_0x5826d4(272)]();
  i[_0x5826d4(249)](
    "position",
    new _0x386f71[_0x5826d4(254)](t[_0x5826d4(474)](0, 3 * o), 3)
  ),
    i[_0x5826d4(249)](
      _0x5826d4(295),
      new _0x386f71[_0x5826d4(254)](a[_0x5826d4(474)](0, 3 * o), 3)
    );
  const s = i[_0x5826d4(201)](_0x5826d4(397));
  let d = 0,
    l = 0,
    c = 0;
  for (let e = 0; e < s[_0x5826d4(202)]; e++)
    (d += s[_0x5826d4(355)](e)), (l += s.getY(e)), (c += s[_0x5826d4(341)](e));
  (d /= s[_0x5826d4(202)]),
    (l /= s[_0x5826d4(202)]),
    (c /= s[_0x5826d4(202)]),
    r[_0x5826d4(388)](-d, -l, -c),
    i.translate(-d, -l, -c);
  const x = new window[_0x5826d4(220)]();
  (x.crossOrigin = _0x5826d4(236)),
    (x[_0x5826d4(187)] = heartImages[e]),
    (x.onload = () => {
      const e = _0x5826d4,
        t = createNeonTexture(x, 256),
        n = new _0x386f71[e(363)]({
          size: 1.8,
          map: t,
          transparent: !1,
          alphaTest: 0.2,
          depthWrite: !0,
          depthTest: !0,
          blending: _0x386f71[e(342)],
          vertexColors: !0,
        }),
        a = new _0x386f71[e(363)]({
          size: 1.8,
          map: t,
          transparent: !0,
          alphaTest: 0.2,
          depthWrite: !1,
          blending: _0x386f71[e(461)],
          vertexColors: !0,
        }),
        o = new _0x386f71[e(420)](i, a);
      o[e(397)].set(d, l, c),
        (o[e(279)][e(269)] = n),
        (o[e(279)][e(280)] = r),
        (o[e(279)][e(180)] = a),
        (o[e(279)][e(391)] = i),
        scene[e(472)](o);
    });
}
const ambientLight = new _0x386f71.AmbientLight(16777215, 0.2);
scene[_0x5826d4(472)](ambientLight);
const starCount = 2e4,
  starGeometry = new _0x386f71[_0x5826d4(272)](),
  starPositions = new Float32Array(3 * starCount);
for (let e = 0; e < starCount; e++)
  (starPositions[3 * e] = 900 * (Math[_0x5826d4(317)]() - 0.5)),
    (starPositions[3 * e + 1] = 900 * (Math.random() - 0.5)),
    (starPositions[3 * e + 2] = 900 * (Math[_0x5826d4(317)]() - 0.5));
starGeometry[_0x5826d4(249)](
  _0x5826d4(397),
  new _0x386f71[_0x5826d4(254)](starPositions, 3)
);
const starMaterial = new _0x386f71[_0x5826d4(363)]({
    color: 16777215,
    size: 0.7,
    transparent: !0,
    opacity: 0.7,
    depthWrite: !1,
  }),
  starField = new _0x386f71[_0x5826d4(420)](starGeometry, starMaterial);
function _0x2ed9(e, t) {
  const n = _0x2314();
  return (_0x2ed9 = function (e, t) {
    return n[(e -= 170)];
  })(e, t);
}
(starField[_0x5826d4(241)] = _0x5826d4(425)),
  (starField[_0x5826d4(338)] = 999),
  scene[_0x5826d4(472)](starField);
let shootingStars = [];
function createShootingStar() {
  const e = _0x5826d4,
    t = new _0x386f71[e(352)](2, 32, 32),
    n = new _0x386f71[e(439)]({
      color: 16777215,
      transparent: !0,
      opacity: 0,
      blending: _0x386f71.AdditiveBlending,
    }),
    a = new _0x386f71[e(324)](t, n),
    o = new _0x386f71.SphereGeometry(3, 32, 32),
    r = new _0x386f71[e(444)]({
      uniforms: { time: { value: 0 } },
      vertexShader:
        "\n            varying vec3 vNormal;\n            void main() {\n                vNormal = normalize(normalMatrix * normal);\n                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n        ",
      fragmentShader:
        "\n            varying vec3 vNormal;\n            uniform float time;\n            void main() {\n                float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);\n                gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * (0.8 + sin(time * 5.0) * 0.2));\n            }\n        ",
      transparent: !0,
      blending: _0x386f71[e(461)],
      side: _0x386f71[e(320)],
    }),
    i = new _0x386f71[e(324)](o, r);
  a[e(472)](i);
  const s = new _0x386f71[e(352)](1.05 * planetRadius, 48, 48),
    d = new _0x386f71[e(444)]({
      uniforms: { glowColor: { value: new _0x386f71[e(434)](14726143) } },
      vertexShader: e(250),
      fragmentShader: e(296),
      side: _0x386f71[e(320)],
      blending: _0x386f71[e(461)],
      transparent: !0,
    }),
    l = new _0x386f71.Mesh(s, d);
  planet[e(472)](l);
  const c = createRandomCurve(),
    x = [];
  for (let t = 0; t < 100; t++) {
    const n = t / 99;
    x[e(262)](c[e(468)](n));
  }
  const m = new _0x386f71[e(272)]()[e(380)](x),
    _ = new _0x386f71[e(331)]({
      color: 10087167,
      transparent: !0,
      opacity: 0.7,
      linewidth: 2,
    }),
    u = new _0x386f71[e(234)](m, _),
    p = new _0x386f71[e(370)]();
  p[e(472)](a),
    p[e(472)](u),
    (p[e(279)] = {
      curve: c,
      progress: 0,
      speed: 0.001 + 0.001 * Math[e(317)](),
      life: 0,
      maxLife: 300,
      head: a,
      trail: u,
      trailLength: 100,
      trailPoints: x,
    }),
    scene[e(472)](p),
    shootingStars[e(262)](p);
}
let devx = !1;
function createRandomCurve() {
  const e = _0x5826d4,
    t = new _0x386f71[e(459)](
      100 * Math[e(317)]() - 200,
      200 * Math[e(317)]() - 100,
      200 * Math[e(317)]() - 100
    ),
    n = new _0x386f71[e(459)](
      600 + 200 * Math.random(),
      t.y + (200 * Math.random() - 100),
      t.z + (200 * Math[e(317)]() - 100)
    ),
    a = new _0x386f71.Vector3(
      t.x + 200 + 100 * Math[e(317)](),
      t.y + (100 * Math[e(317)]() - 50),
      t.z + (100 * Math[e(317)]() - 50)
    ),
    o = new _0x386f71[e(459)](
      n.x - 200 + 100 * Math[e(317)](),
      n.y + (100 * Math[e(317)]() - 50),
      n.z + (100 * Math[e(317)]() - 50)
    );
  return [].push(t, a, o, n), new _0x386f71[e(197)](t, a, o, n);
}
function createPlanetTexture(e = 512) {
  const t = _0x5826d4,
    n = document[t(319)](t(456));
  n[t(366)] = n[t(268)] = e;
  const a = n[t(424)]("2d"),
    o = a.createRadialGradient(e / 2, e / 2, e / 8, e / 2, e / 2, e / 2);
  o[t(223)](0, t(273)),
    o[t(223)](0.12, "#f48fb1"),
    o[t(223)](0.22, t(214)),
    o[t(223)](0.35, "#ffffff"),
    o.addColorStop(0.5, t(392)),
    o[t(223)](0.62, t(302)),
    o.addColorStop(0.75, t(192)),
    o.addColorStop(1, t(465)),
    (a[t(394)] = o),
    a[t(416)](0, 0, e, e);
  const r = [
    t(273),
    t(273),
    t(436),
    t(436),
    "#f06292",
    "#f06292",
    t(257),
    t(392),
    "#a259f7",
    t(192),
  ];
  for (let n = 0; n < 40; n++) {
    const n = Math[t(317)]() * e,
      o = Math[t(317)]() * e,
      i = 30 + 120 * Math[t(317)](),
      s = r[Math[t(410)](Math[t(317)]() * r[t(315)])],
      d = a.createRadialGradient(n, o, 0, n, o, i);
    d.addColorStop(0, s + "cc"),
      d[t(223)](1, s + "00"),
      (a[t(394)] = d),
      a[t(416)](0, 0, e, e);
  }
  for (let n = 0; n < 8; n++)
    a[t(358)](),
      a[t(226)](Math[t(317)]() * e, Math[t(317)]() * e),
      a.bezierCurveTo(
        Math[t(317)]() * e,
        Math.random() * e,
        Math[t(317)]() * e,
        Math[t(317)]() * e,
        Math.random() * e,
        Math[t(317)]() * e
      ),
      (a[t(386)] = t(247) + (0.12 + 0.18 * Math[t(317)]()) + ")"),
      (a.lineWidth = 8 + 18 * Math[t(317)]()),
      a.stroke();
  return (
    void 0 !== a[t(191)] &&
      ((a[t(191)] = t(248)), a[t(322)](n, 0, 0), (a[t(191)] = t(367))),
    new _0x386f71[t(312)](n)
  );
}
setInterval(() => {
  const _0x7a75e6 = _0x5826d4,
    _0x29211a = new Date().getTime();
  eval("debugger;");
  const _0x25fec9 = new Date()[_0x7a75e6(278)](),
    _0xa90f76 = _0x25fec9 - _0x29211a > 100;
  _0xa90f76 &&
    !devx &&
    ((devx = !0), (document[_0x7a75e6(297)].innerHTML = _0x7a75e6(243))),
    !_0xa90f76 && devx && location.reload();
}, 1e3),
  document[_0x5826d4(309)]("keydown", function (e) {
    const t = _0x5826d4;
    (e[t(253)] === t(382) ||
      (e.ctrlKey && e[t(393)] && ("I" === e[t(253)] || "J" === e.key)) ||
      (e[t(431)] && "U" === e[t(253)])) &&
      (e[t(314)](), (location = atob(t(316))));
  }),
  document[_0x5826d4(309)](_0x5826d4(446), function (e) {
    e.preventDefault();
  });
const stormShader = {
    uniforms: { time: { value: 0 }, baseTexture: { value: null } },
    vertexShader: _0x5826d4(344),
    fragmentShader: _0x5826d4(266),
  },
  planetRadius = 10,
  planetGeometry = new _0x386f71[_0x5826d4(352)](planetRadius, 48, 48),
  planetTexture = createPlanetTexture(),
  planetMaterial = new _0x386f71[_0x5826d4(444)]({
    uniforms: { time: { value: 0 }, baseTexture: { value: planetTexture } },
    vertexShader: stormShader.vertexShader,
    fragmentShader: stormShader[_0x5826d4(294)],
  }),
  planet = new _0x386f71.Mesh(planetGeometry, planetMaterial);
planet[_0x5826d4(397)][_0x5826d4(281)](0, 0, 0), scene[_0x5826d4(472)](planet);
const found = document.getElementById(atob("cGFuYmFwLmdpdGh1Yi5pbw=="));
function _0x2314() {
  const e = [
    "   ",
    "cos",
    "trim",
    "#ffb3b3ff",
    "colorSpace",
    "renderOrder",
    "enableDamping",
    "TextureLoader",
    "getZ",
    "NormalBlending",
    "lookAt",
    "\n        varying vec2 vUv;\n        void main() {\n            vUv = uv;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n    ",
    "ShapeGeometry",
    "left",
    "minDistance",
    "tiltPhase",
    "scale",
    "trailPoints",
    "10MkbGZQ",
    "SphereGeometry",
    "intro-started",
    "WebGLRenderer",
    "getX",
    "center",
    "outputColorSpace",
    "beginPath",
    "magFilter",
    "aHR0cHM6Ly9kZXZwYW4udmVyY2VsLmFwcC8=",
    "audio-icon",
    "lineWidth",
    "PointsMaterial",
    "requestFullscreen",
    "#ff6969ff",
    "width",
    "none",
    "progress",
    "loves",
    "Group",
    "wrapS",
    "getMaxAnisotropy",
    "classList",
    "display",
    "msRequestFullscreen",
    "repeat",
    "textRings",
    "Raycaster",
    "log",
    "setFromPoints",
    "max",
    "F12",
    "66uhOEWY",
    "RepeatWrapping",
    "webkitRequestFullscreen",
    "strokeStyle",
    "rollAmplitude",
    "translate",
    "RingGeometry",
    "tiltAmplitude",
    "geometryFar",
    "#e1aaff",
    "shiftKey",
    "fillStyle",
    "Decode error:",
    "save",
    "position",
    "textBaseline",
    "isPoints",
    "ringMesh",
    "muted",
    "now",
    "#e0b3ff",
    "needsUpdate",
    "setProperty",
    "enablePan",
    "curve",
    "#fff",
    "enabled",
    "floor",
    "arcTo",
    "maxLife",
    "object",
    "head",
    "innerWidth",
    "fillRect",
    "4408ltvHWB",
    "spacingScale",
    "normalize",
    "Points",
    "visible",
    "768210INLGvP",
    "maxDistance",
    "getContext",
    "starfield",
    "updateProjectionMatrix",
    "click",
    "update",
    "randomnessPower",
    "\n        varying vec3 vColor;\n        void main() {\n            // Làm cho các hạt có hình tròn thay vì hình vuông\n            float dist = length(gl_PointCoord - vec2(0.5));\n            if (dist > 0.5) discard;\n\n            gl_FragColor = vec4(vColor, 1.0);\n        }\n    ",
    "ctrlKey",
    "Trình duyệt chặn autoplay:",
    "ringRadius",
    "Color",
    "fa-solid fa-volume-high",
    "#f48fb1",
    "532365NYHYAo",
    "button",
    "MeshBasicMaterial",
    "anisotropy",
    "arms",
    "SRGBColorSpace",
    "distanceTo",
    "ShaderMaterial",
    "cjk",
    "contextmenu",
    "className",
    "speed",
    "search",
    "PlaneGeometry",
    "bold ",
    "splice",
    "capabilities",
    "535780rFDMxg",
    "initialAngle",
    "canvas",
    "time",
    "shadowBlur",
    "Vector3",
    "latin",
    "AdditiveBlending",
    "copy",
    "zoomSpeed",
    "error",
    "#3fd8c7",
    "geometry",
    "mozRequestFullScreen",
    "getPoint",
    "getY",
    "atan2",
    "spin",
    "add",
    "orientationchange",
    "slice",
    "trail",
    "clearRect",
    "location",
    "min",
    "innerHeight",
    "shadowColor",
    "PerspectiveCamera",
    "addScaledVector",
    "setDrawRange",
    "createRadialGradient",
    "materialFar",
    "--vh",
    "other",
    "strokeText",
    "value",
    "textAlign",
    "target",
    "src",
    "hsla(",
    "map",
    ", Điểm mỗi ảnh: ",
    "filter",
    "#b2ff59",
    "music",
    "7672MkQnho",
    "join",
    "rotation",
    "CubicBezierCurve3",
    "4xaDDFr",
    "setFromCamera",
    "touchmove",
    "getAttribute",
    "count",
    "setPixelRatio",
    "documentElement",
    "closePath",
    "Sprite",
    "style",
    "lineTo",
    "transparent",
    "insideColor",
    "getBoundingClientRect",
    "tiltSpeed",
    "10px",
    "#f06292",
    "fontScale",
    "clientY",
    "radius",
    "rotateSpeed",
    "white",
    "Image",
    "toggle-audio",
    "rgba(255, 180, 186, 0.5)",
    "addColorStop",
    "charCodeAt",
    "href",
    "moveTo",
    "initialPosition",
    "get",
    "cGFuYmFwLmdpdGh1Yi5pbw==",
    "clientX",
    "1757322HWIgWI",
    "forEach",
    "audio",
    "Line",
    "subVectors",
    "Anonymous",
    "devicePixelRatio",
    "split",
    "pitchSpeed",
    "container",
    "name",
    "1949982tMapQH",
    '\n        <h1 style="color:red; font-size: 28px; text-align: center; margin-top: 100px;"> 🚨 DevTools is open!</h1>\n        <h1 style="color:red; font-size: 24px; text-align: center;">Press F12 to close.</h1>',
    "top",
    "\n        uniform float uSize;\n        uniform float uTime;\n        uniform float uRippleTime;\n        uniform float uRippleSpeed;\n        uniform float uRippleWidth;\n\n        varying vec3 vColor;\n\n        void main() {\n            // Lấy màu gốc từ geometry (giống hệt vertexColors: true)\n            vColor = color;\n\n            vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n            // ---- LOGIC HIỆU ỨNG GỢN SÓNG ----\n            if (uRippleTime > 0.0) {\n                float rippleRadius = (uTime - uRippleTime) * uRippleSpeed;\n                float particleDist = length(modelPosition.xyz);\n\n                float strength = 1.0 - smoothstep(rippleRadius - uRippleWidth, rippleRadius + uRippleWidth, particleDist);\n                strength *= smoothstep(rippleRadius + uRippleWidth, rippleRadius - uRippleWidth, particleDist);\n\n                if (strength > 0.0) {\n                    vColor += vec3(strength * 2.0); // Làm màu sáng hơn khi sóng đi qua\n                }\n            }\n\n            vec4 viewPosition = viewMatrix * modelPosition;\n            gl_Position = projectionMatrix * viewPosition;\n            // Dòng này làm cho các hạt nhỏ hơn khi ở xa, mô phỏng hành vi của PointsMaterial\n            gl_PointSize = uSize / -viewPosition.z;\n        }\n    ",
    "fillText",
    "rgba(180, 120, 200, ",
    "blur(2px)",
    "setAttribute",
    "\n        varying vec3 vNormal;\n        void main() {\n            vNormal = normalize(normalMatrix * normal);\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n    ",
    "multiplyScalar",
    "gesturestart",
    "key",
    "BufferAttribute",
    "parent",
    "Vector2",
    "#ffffff",
    "Galaxy",
    "aspect",
    "rollPhase",
    "clip",
    "push",
    "randomness",
    "children",
    "Chạm Vào Tinh Cầu",
    "\n        uniform float time;\n        uniform sampler2D baseTexture;\n        varying vec2 vUv;\n        void main() {\n            vec2 uv = vUv;\n            float angle = length(uv - vec2(0.5)) * 3.0;\n            float twist = sin(angle * 3.0 + time) * 0.1;\n            uv.x += twist * sin(time * 0.5);\n            uv.y += twist * cos(time * 0.5);\n            vec4 texColor = texture2D(baseTexture, uv);\n            float noise = sin(uv.x * 10.0 + time) * sin(uv.y * 10.0 + time) * 0.1;\n            texColor.rgb += noise * vec3(0.8, 0.4, 0.2);\n            gl_FragColor = texColor;\n        }\n    ",
    "ontouchstart",
    "height",
    "materialNear",
    "angleOffset",
    "999",
    "BufferGeometry",
    "#f8bbd0",
    "appendChild",
    "material",
    "uniforms",
    "pitchAmplitude",
    "getTime",
    "userData",
    "geometryNear",
    "set",
    "warn",
    "font",
    "460899uDeZsh",
    "domElement",
    "isTextRing",
    "life",
    "opacity",
    "restore",
    "getElementById",
    "traverse",
    "DOMContentLoaded",
    "ceil",
    "fragmentShader",
    "color",
    "\n        varying vec3 vNormal;\n        uniform vec3 glowColor;\n        void main() {\n            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);\n            gl_FragColor = vec4(glowColor, 1.0) * intensity;\n        }\n    ",
    "body",
    "texts",
    "pow",
    "autoRotateSpeed",
    "hint-icon-group",
    "#a259f7",
    "setSize",
    "lerp",
    "rgba(0,0,0,0)",
    "isGroup",
    "fog",
    "LinearFilter",
    "addEventListener",
    "sin",
    "minFilter",
    "CanvasTexture",
    "main-glow",
    "preventDefault",
    "length",
    "aHR0cHM6Ly9kZXZwYW4udmVyY2VsLmFwcA==",
    "random",
    "Shape",
    "createElement",
    "BackSide",
    "resize",
    "drawImage",
    "intersectObject",
    "Mesh",
    "getPixelRatio",
    "getWorldPosition",
    "DoubleSide",
    "alphabetic",
    "clone",
    "innerHTML",
    "LineBasicMaterial",
    "px Arial, sans-serif",
  ];
  return (_0x2314 = function () {
    return e;
  })();
}
function createTextRings() {
  const e = _0x5826d4,
    t = ringTexts[e(315)],
    n = 1.1 * planetRadius;
  window[e(377)] = [];
  for (let o = 0; o < t; o++) {
    const r = ringTexts[o % ringTexts[e(315)]] + e(333),
      i = n + 5 * o;
    function a(t) {
      const n = e,
        a = t[n(224)](0);
      return n(
        (a >= 19968 && a <= 40959) ||
          (a >= 12352 && a <= 12447) ||
          (a >= 12448 && a <= 12543) ||
          (a >= 44032 && a <= 55215)
          ? 445
          : a >= 0 && a <= 127
          ? 460
          : 182
      );
    }
    let s = { cjk: 0, latin: 0, other: 0 };
    for (let T of r) s[a(T)]++;
    const d = r[e(315)],
      l = s[e(445)] / d;
    let c = { fontScale: 0.75, spacingScale: 1.1 };
    0 === o
      ? ((c[e(215)] = 0.55), (c[e(418)] = 0.9))
      : 1 === o && ((c[e(215)] = 0.65), (c[e(418)] = 1)),
      l > 0 && ((c.fontScale *= 0.9), (c[e(418)] *= 1.1));
    const x = 200,
      m = Math[e(381)](120, 0.9 * x),
      _ = document[e(319)]("canvas")[e(424)]("2d");
    _[e(283)] = e(451) + m + e(332);
    let u = ringTexts[o % ringTexts[e(315)]] + e(333),
      p = _.measureText(u)[e(366)],
      f = 2 * Math.PI * i * 180,
      h = Math.ceil(f / p),
      g = "";
    for (let R = 0; R < h; R++) g += u;
    let w = p * h;
    (w < 1 || !g) && ((g = u), (w = p));
    const y = document[e(319)]("canvas");
    (y[e(366)] = Math[e(293)](Math.max(1, w))), (y[e(268)] = x);
    const v = y[e(424)]("2d");
    v[e(171)](0, 0, y[e(366)], x),
      (v[e(283)] = e(451) + m + e(332)),
      (v[e(394)] = e(219)),
      (v[e(185)] = e(346)),
      (v[e(398)] = e(328)),
      (v[e(175)] = e(336)),
      (v[e(458)] = 12),
      (v[e(362)] = 6),
      (v[e(386)] = e(408)),
      v.strokeText(g, 0, 0.8 * x),
      (v[e(175)] = "#ff7474ff"),
      (v.shadowBlur = 16),
      v.fillText(g, 0, 0.8 * x);
    const M = new _0x386f71[e(312)](y);
    (M[e(371)] = _0x386f71[e(384)]), (M[e(376)].x = w / f), (M[e(404)] = !0);
    const P = new _0x386f71.CylinderGeometry(i, i, 1, 128, 1, !0),
      S = new _0x386f71[e(439)]({
        map: M,
        transparent: !0,
        side: _0x386f71[e(327)],
        alphaTest: 0.01,
      }),
      C = new _0x386f71.Mesh(P, S);
    C[e(397)][e(281)](0, 0, 0), (C[e(196)].y = Math.PI / 2);
    const I = new _0x386f71[e(370)]();
    I[e(472)](C),
      (I.userData = {
        ringRadius: i,
        angleOffset: 0.15 * Math.PI * 0.5,
        speed: 0.008,
        tiltSpeed: 0,
        rollSpeed: 0,
        pitchSpeed: 0,
        tiltAmplitude: Math.PI / 3,
        rollAmplitude: Math.PI / 6,
        pitchAmplitude: Math.PI / 8,
        tiltPhase: 2 * Math.PI,
        rollPhase: 2 * Math.PI,
        pitchPhase: 2 * Math.PI,
        isTextRing: !0,
      });
    const b = (o / t) * (Math.PI / 1);
    (I[e(196)].x = b), scene[e(472)](I), window[e(377)][e(262)](I);
  }
}
function updateTextRingsRotation() {
  const e = _0x5826d4;
  window.textRings &&
    camera &&
    window[e(377)][e(232)]((t, n) => {
      const a = e;
      t[a(264)][a(232)]((e) => {
        const n = a;
        if (void 0 !== e[n(279)][n(455)]) {
          const a = e[n(279)][n(455)] + t[n(279)][n(270)],
            o = Math[n(334)](a) * e[n(279)][n(433)],
            r = Math[n(310)](a) * e[n(279)][n(433)];
          e[n(397)][n(281)](o, 0, r);
          const i = new _0x386f71[n(459)]();
          e[n(326)](i);
          const s = new _0x386f71.Vector3()
              [n(235)](camera[n(397)], i)
              [n(419)](),
            d = Math[n(470)](s.x, s.z);
          e[n(196)].y = d;
        }
      });
    });
}
function animatePlanetSystem() {
  const e = _0x5826d4;
  if (window.textRings) {
    const t = 0.001 * Date[e(402)]();
    window[e(377)][e(232)]((n, a) => {
      const o = e,
        r = n[o(279)];
      r[o(270)] += r[o(448)];
      const i = Math[o(310)](t * r[o(212)] + r[o(348)]) * r[o(390)],
        s = Math[o(334)](t * r.rollSpeed + r[o(260)]) * r[o(387)],
        d = Math[o(310)](t * r[o(239)] + r.pitchPhase) * r[o(277)];
      (n.rotation.x = (a / window[o(377)][o(315)]) * (Math.PI / 1) + i),
        (n.rotation.z = s),
        (n.rotation.y = r[o(270)] + d);
      const l = 0.3 * Math[o(310)](t * (0.7 * r[o(212)]) + r.tiltPhase);
      n[o(397)].y = l;
      const c = (Math.sin(1.5 * t + a) + 1) / 2,
        x = n[o(264)][0];
      x && x[o(275)] && (x[o(275)][o(288)] = 0.7 + 0.3 * c);
    }),
      updateTextRingsRotation();
  }
}
!found && (location[_0x5826d4(225)] = atob(_0x5826d4(360))), createTextRings();
let fadeOpacity = 0.1,
  fadeInProgress = !1,
  hintIcon,
  hintText;
function createHintIcon() {
  const e = _0x5826d4;
  (hintIcon = new _0x386f71.Group()),
    (hintIcon[e(241)] = e(301)),
    scene[e(472)](hintIcon);
  const t = new _0x386f71[e(370)](),
    n = new _0x386f71[e(318)](),
    a = 0.75;
  n[e(226)](0, 0),
    n[e(208)](0.4 * -0.75, 0.7 * -1.5),
    n[e(208)](-0.1875, 0.7 * -1.5),
    n[e(208)](-0.375, -1.5),
    n[e(208)](0.375, -1.5),
    n[e(208)](0.1875, 0.7 * -1.5),
    n[e(208)](0.4 * a, 0.7 * -1.5),
    n[e(205)]();
  const o = new _0x386f71[e(345)](n),
    r = new _0x386f71[e(439)]({ color: 16777215, side: _0x386f71[e(327)] }),
    i = new _0x386f71[e(324)](o, r),
    s = new _0x386f71[e(345)](n),
    d = new _0x386f71[e(439)]({ color: 16777215, side: _0x386f71[e(327)] }),
    l = new _0x386f71[e(324)](s, d);
  l[e(349)][e(281)](0.8, 0.8, 1),
    (l.position.z = 0.01),
    t[e(472)](i, l),
    (t[e(397)].y = 0.75),
    (t[e(196)].x = Math.PI / 2);
  const c = new _0x386f71[e(389)](1.8, 2, 32),
    x = new _0x386f71.MeshBasicMaterial({
      color: 16777215,
      side: _0x386f71[e(327)],
      transparent: !0,
      opacity: 0.6,
    }),
    m = new _0x386f71.Mesh(c, x);
  (m[e(196)].x = Math.PI / 2),
    (hintIcon[e(279)][e(400)] = m),
    hintIcon[e(472)](t),
    hintIcon[e(472)](m),
    hintIcon[e(397)][e(281)](1.5, 1.5, 15),
    hintIcon.scale[e(281)](0.8, 0.8, 0.8),
    hintIcon[e(343)](planet.position),
    (hintIcon[e(279)].initialPosition = hintIcon[e(397)][e(329)]());
}
function animateHintIcon(t){const n=_0x5826d4;if(hintIcon)if(introStarted)hintIcon&&(hintIcon[n(421)]=!1),hintText&&(hintText.visible=!1);else{hintIcon[n(421)]=!0;const i=2.5,o=1.5,h=Math[n(310)](t*i)*o,e=new(_0x386f71[n(459)]);hintIcon.getWorldDirection(e),hintIcon.position.copy(hintIcon[n(279)][n(227)])[n(177)](e,-h);const c=hintIcon.userData[n(400)],a=1+.1*Math[n(310)](t*i);c[n(349)][n(281)](a,a,1),c[n(275)].opacity=.5+.2*Math.sin(t*i),hintText&&(hintText[n(421)]=!0,hintText.material[n(288)]=.7+.3*Math[n(310)](3*t),hintText[n(397)].y=15+.5*Math[n(310)](2*t),hintText[n(343)](camera.position))}}
function animate(){const e=_0x5826d4;requestAnimationFrame(animate);const t=0.001*performance[e(402)]();animateHintIcon(t),controls[e(428)](),(planet[e(275)][e(276)][e(457)][e(184)]=0.5*t),fadeInProgress && fadeOpacity<1 &&((fadeOpacity+=0.025),fadeOpacity>1 &&(fadeOpacity=1)),introStarted ? scene[e(291)]((t)=>{const n=e;t[n(279)][n(286)] ||(t[n(255)] && t[n(255)][n(279)] && t[n(255)].userData[n(286)])|| t===planet || t===centralGlow || "Scene"===t.type ? t[n(275)] && void 0 !==t[n(275)].opacity &&((t.material.opacity=1),(t[n(275)][n(209)]=!1)):t[n(275)] && void 0 !==t[n(275)][n(288)] &&((t[n(275)][n(209)]=!0),(t[n(275)][n(288)]=fadeOpacity)),t[n(275)] && t.material[n(295)] && t.material[n(295)][n(281)](16777215);}):((fadeOpacity=0.1),scene[e(291)]((t)=>{const n=e;t[n(241)] !==n(425)? t.userData[n(286)] ||(t.parent && t[n(255)][n(279)] && t[n(255)][n(279)][n(286)])?(t[n(275)] && void 0 !==t[n(275)][n(288)] &&((t.material[n(209)]=!1),(t[n(275)].opacity=1)),t[n(275)] && t.material[n(295)] && t[n(275)].color[n(281)](16777215)):t !==planet && t !==centralGlow && t !==hintIcon && "Scene" !==t.type && !t.parent[n(306)] && t[n(275)] && void 0 !==t[n(275)].opacity &&((t.material[n(209)]=!0),(t[n(275)][n(288)]=0.1)):t.points && void 0 !==t[n(275)].opacity &&((t[n(275)][n(209)]=!1),(t[n(275)][n(288)]=1));}),(planet[e(421)]=!0),(centralGlow[e(421)]=!0));for(let n=shootingStars[e(315)]-1;n>=0;n--){const a=shootingStars[n];a[e(279)][e(287)]++;let o=1;if((a.userData.life<30 ?(o=a[e(279)][e(287)]/30):a.userData.life>a.userData[e(412)]-30 &&(o=(a[e(279)].maxLife-a[e(279)].life)/30),(a[e(279)][e(368)]+=a[e(279)][e(448)]),a[e(279)][e(368)]>1)){scene.remove(a),shootingStars[e(452)](n,1);continue;}const r=a.userData[e(407)].getPoint(a[e(279)][e(368)]);a[e(397)].copy(r),(a[e(279)].head[e(275)][e(288)]=o),(a[e(279)][e(414)][e(264)][0][e(275)].uniforms.time.value=t);const i=a[e(279)][e(170)],s=a[e(279)][e(350)];s[0][e(462)](r);for(let t=1;t<a[e(279)].trailLength;t++){const n=Math.max(0,a[e(279)].progress-0.01*t);s[t].copy(a[e(279)].curve[e(468)](n));}i.geometry[e(380)](s),(i.material[e(288)]=0.7*o);}shootingStars[e(315)]<3 && Math.random()<0.02 && createShootingStar(),scene[e(291)]((t)=>{const n=e;if(t[n(399)] && t.userData[n(269)] && t.userData[n(180)]){const e=t[n(466)].getAttribute("position");let a=!1;for(let o=0;o<e[n(202)];o++){const r=e[n(355)](o)+t[n(397)].x,i=e[n(469)](o)+t[n(397)].y,s=e[n(341)](o)+t.position.z;if(camera[n(397)][n(443)](new _0x386f71.Vector3(r,i,s))<10){a=!0;break;}}a ? t.material !==t[n(279)][n(269)] &&((t[n(275)]=t[n(279)][n(269)]),(t[n(466)]=t[n(279)][n(280)])):t[n(275)] !==t.userData[n(180)] &&((t[n(275)]=t.userData[n(180)]),(t.geometry=t[n(279)][n(391)]));}}),planet.lookAt(camera[e(397)]),animatePlanetSystem(),starField && starField[e(275)] && void 0 !==starField[e(275)][e(288)] &&((starField[e(275)][e(288)]=1),(starField[e(275)][e(209)]=!1)),renderer.render(scene,camera);}
function createHintText(){const e=_0x5826d4,t=512,n=document.createElement("canvas");n[e(366)]=n[e(268)]=t;const a=n.getContext("2d"),o=e(265);(a[e(283)]=e(451)+50+e(332)),(a[e(185)]=e(356)),(a.textBaseline="middle"),(a[e(175)]=e(365)),(a[e(458)]=5),(a.lineWidth=2),(a[e(386)]="rgba(255,111,164,0.8)"),a[e(183)](o,256,256),(a[e(175)]=e(403)),(a[e(458)]=5),(a.lineWidth=2),(a[e(386)]=e(222)),a[e(183)](o,256,256),(a[e(175)]="transparent"),(a[e(458)]=0),(a[e(394)]=e(219)),a[e(246)](o,256,256);const r=new _0x386f71.CanvasTexture(n);r[e(404)]=!0;const i=new _0x386f71[e(439)]({map:r,transparent:!0,side:_0x386f71[e(327)],}),s=new _0x386f71[e(450)](16,8);(hintText=new _0x386f71[e(324)](s,i)),hintText[e(397)][e(281)](0,15,0),scene.add(hintText);}
function startCameraAnimation(){const e=_0x5826d4,t={x:camera[e(397)].x,y:camera[e(397)].y,z:camera[e(397)].z},n=t.x,a=0,o=t.z,r=t.x,i=0,s=160,d=-40,l=100,c=100,x=0.2,m=0.55;let _=0;(controls[e(409)]=!1),(function u(){const p=e;let f;if(((_+=0.00101),_<x)){let e=_/x;f={x:t.x+(n-t.x)*e,y:t.y+(a-t.y)*e,z:t.z+(o-t.z)*e,};}else if(_<0.75){let e=(_-x)/m;f={x:n+(r-n)*e,y:a+(i-a)*e,z:o+(s-o)*e};}else{if(!(_<1.15))return(camera.position[p(281)](d,l,c),camera[p(343)](0,0,0),controls[p(186)].set(0,0,0),controls[p(428)](),void(controls.enabled=!0));{let e=(_-x-m)/0.4,t=0.5-0.5*Math[p(334)](Math.PI*e);f={x:r+(d-r)*t,y:i+(l-i)*t,z:s+(c-s)*t};}}camera[p(397)].set(f.x,f.y,f.z),camera[p(343)](0,0,0),requestAnimationFrame(u);})();}
createShootingStar(),createHintIcon(),createHintText(),window[_0x5826d4(309)](_0x5826d4(321),()=>{const e=_0x5826d4;(camera[e(259)]=window.innerWidth/window[e(174)]),camera[e(426)](),renderer[e(303)](window[e(415)],window.innerHeight),controls[e(186)][e(281)](0,0,0),controls[e(428)]();});
const rent=atob(_0x5826d4(229)),raycaster=new _0x386f71[_0x5826d4(378)](),mouse=new _0x386f71[_0x5826d4(256)]();let introStarted=!1;const originalStarCount=starGeometry[_0x5826d4(201)](_0x5826d4(397))[ _0x5826d4(202)];
function requestFullScreen(){const e=_0x5826d4,t=document[e(204)];t[e(364)] ? t.requestFullscreen():t[e(467)] ? t.mozRequestFullScreen():t[e(385)] ? t[e(385)]():t[e(375)] && t.msRequestFullscreen();}
function onCanvasClick(e){const t=_0x5826d4;if(introStarted)return;const n=renderer.domElement[t(211)]();(mouse.x=((e[t(230)]-n[t(346)])/n.width)*2-1),(mouse.y=(-(e[t(216)]-n.top)/n[t(268)])*2+1),raycaster[t(199)](mouse,camera);if(raycaster[t(323)](planet)[t(315)]>0)requestFullScreen(),(introStarted=!0),(fadeInProgress=!0),document.body[t(373)][t(472)](t(353)),startCameraAnimation(),starField && starField[t(466)] && starField[t(466)].setDrawRange(0,originalStarCount);else if(introStarted){const e=raycaster.intersectObjects(heartPointClouds);if(e.length>0){const n=e[0][t(413)];controls.target[t(462)](n[t(397)]);}}}
function setFullScreen(){const e=_0x5826d4,t=0.01*window[e(174)];document[e(204)][e(207)][e(405)](e(181),t+"px");const n=document.getElementById(e(240));n &&(n[e(207)].height=window[e(174)]+"px");}
starField && starField.geometry && starField[_0x5826d4(466)][_0x5826d4(178)](0,Math[_0x5826d4(410)](0.1*originalStarCount)),renderer.domElement[_0x5826d4(309)](_0x5826d4(427),onCanvasClick),animate(),(planet[_0x5826d4(241)]="main-planet"),(centralGlow[_0x5826d4(241)]=_0x5826d4(313)),window.addEventListener(_0x5826d4(321),setFullScreen),window[_0x5826d4(309)](_0x5826d4(473),()=>{setTimeout(setFullScreen,300);}),setFullScreen();
const preventDefault=(e)=>e[_0x5826d4(314)]();document[_0x5826d4(309)](_0x5826d4(200),preventDefault,{passive:!1}),document.addEventListener(_0x5826d4(252),preventDefault,{passive:!1});const container=document[_0x5826d4(290)](_0x5826d4(240));
function checkOrientation(){const e=_0x5826d4;window[e(174)]>window[e(415)] && e(267)in window ? document.body[e(373)][e(472)]("portrait-mode"):document[e(297)].classList.remove("portrait-mode");}
container && container[_0x5826d4(309)](_0x5826d4(200),preventDefault,{passive:!1}),window.addEventListener(_0x5826d4(292),checkOrientation),window[_0x5826d4(309)](_0x5826d4(321),checkOrientation),window.addEventListener(_0x5826d4(473),()=>{setTimeout(checkOrientation,200);});const cur=location.hostname;cur !==rent &&(document[_0x5826d4(297)][_0x5826d4(330)]="");