export const API_KEY = 'AIzaSyDVXBKOWzHEP1YGPPTpc66NibPvy26C4Vg';

export const valueConverter = (value) => {
	if (value >= 1000000) {
		return Math.floor(value / 1000000) + ' ' + 'M';
	} else if (value >= 1000) {
		return Math.floor(value / 1000) + ' ' + 'K';
	} else {
		return value;
	}
};
export const likesConverts = (value) => {
	if (value >= 1000000) {
		return Math.floor(value / 1000000) + 'M';
	} else if (value >= 1000) {
		return Math.floor(value / 1000) + 'K';
	} else {
		return value;
	}
};
