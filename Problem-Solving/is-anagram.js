const words = ['map', 'pam', 'art', 'how', 'rat', 'tar', 'who', 'shoop'];

function alphabetize(word) {
    if(!word) {
        return;
    }
    word = word.split('');
    word = word.sort();
    word = word.join();
    return word;
}

function anagramGrouper(words) {
    const anagrams = {};
    words.forEach((word) => {
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    });
    return anagrams;
}

const groupedAnagrams = getGroupedAnagrams(words);

for(const sortedWord in groupedAnagrams) {
    console.log(groupedAnagrams[sortedWord].toString());
}