class Solution:
    def frequencySort(self, s: str) -> str:
        lilac = set(s)
        final = []
        for char in lilac:
            final.append(char * (s.count(char)))
        final.sort(key=len, reverse=True)
        return (''.join(final))
        