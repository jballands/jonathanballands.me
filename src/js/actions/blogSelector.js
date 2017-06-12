//
//  jonathanballands.me
//  actions/blogSelector.js
//
//  © 2017 Jonathan Ballands
//

export const sortLatestToEarliest = () => (
    {
        type: 'SORT_LATEST_TO_EARLIEST'
    }
);

export const sortEarliestToLatest = () => (
    {
        type: 'SORT_EARLIEST_TO_LATEST'
    }
);

export const filterWithKeywords = keywords => (
    {
        type: 'FILTER_WITH_KEYWORDS',
        keywords
    }
);
