﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class PostSpecParams
    {
        private const int MaxPageSize = 70;
        public int PageIndex { get; set; } = 1;
        private int _pageSize = 7;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }
        public string Sort { get; set; }
        private string _search;
        public string Search
        {
            get => _search;
            set => _search = value.ToLower();
        }
    }
}
