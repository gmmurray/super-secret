import { getRandomString } from './api';
import * as characterConstants from './constants';

export const generatePassword = async config => {
	const adjustedConfig = {
		length: config.length,
		characters: createPossibleCharacterString(
			createCharacterSettingArray(config),
		),
		replacement: config.replacement,
    };
    return await getRandomString(adjustedConfig);
};

const createPossibleCharacterString = settings => {
	let result = '';
	settings.filter(s => s.enabled).map(s => (result += s.characters));
	return result;
};

const createCharacterSettingArray = ({
	lowercase,
	uppercase,
	numbers,
	symbols,
}) => {
	return [
		{
			enabled: lowercase,
			characters: characterConstants.LETTERS_LOWER,
		},
		{
			enabled: uppercase,
			characters: characterConstants.LETTERS_UPPER,
		},
		{
			enabled: numbers,
			characters: characterConstants.NUMBERS,
		},
		{
			enabled: symbols,
			characters: characterConstants.SYMBOLS,
		},
	];
};
