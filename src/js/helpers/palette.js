//
//	jballands/jonathanballands.me
//	palette.js
//
//	© 2017 Jonathan Ballands
//

//
//	Monotone
//
export const white = '#fff';
export const mercury = '#e8e8e8';
export const alto = '#d1d1d1';
export const silver = '#a3a3a3';
export const shark = '#282c34';
export const black = '#000';

//
//	Colors
//
export const moonRaker = '#d0bff2';
export const fuchsiaBlue = '#7953c1';
export const gigas = '#593c8f';

//
//	Red
//
// export const romantic = '#ffcfb1';
// export const bittersweet = '#ff6b6b';

//
//	Aqua
//
// export const frostedMint = '#dbfffc';
// export const puertoRico = '#4ecdc4';

//
//	Modifiers
//

// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
export function shadeBlend(p, c0, c1) {
	var n = p < 0 ? p * -1 : p,
		u = Math.round,
		w = parseInt;
	if (c0.length > 7) {
		var f = c0.split(','),
			t = (c1 ? c1 : p < 0 ? 'rgb(0,0,0)' : 'rgb(255,255,255)').split(
				',',
			),
			R = w(f[0].slice(4)),
			G = w(f[1]),
			B = w(f[2]);
		return (
			'rgb(' +
			(u((w(t[0].slice(4)) - R) * n) + R) +
			',' +
			(u((w(t[1]) - G) * n) + G) +
			',' +
			(u((w(t[2]) - B) * n) + B) +
			')'
		);
	} else {
		var f = w(c0.slice(1), 16),
			t = w((c1 ? c1 : p < 0 ? '#000000' : '#FFFFFF').slice(1), 16),
			R1 = f >> 16,
			G1 = (f >> 8) & 0x00ff,
			B1 = f & 0x0000ff;
		return (
			'#' +
			(
				0x1000000 +
				(u(((t >> 16) - R1) * n) + R1) * 0x10000 +
				(u((((t >> 8) & 0x00ff) - G1) * n) + G1) * 0x100 +
				(u(((t & 0x0000ff) - B1) * n) + B1)
			)
				.toString(16)
				.slice(1)
		);
	}
}
