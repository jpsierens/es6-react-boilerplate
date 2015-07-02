/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';
import SearchableTable from './components/SearchableTable';
import {data} from './components/data';

// Filterable CheatSheet Component
React.render(<SearchableTable data={data}/>, document.getElementById('searchableTable'));

