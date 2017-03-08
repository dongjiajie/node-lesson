
## aggregations of query
```
{
  "query": {
    "filtered": {
      "filter": {
        "range": {
          "price": {
            "gte": 20,
            "lt": 14612
          }
        }
      }
    }
  },
  "aggs": {
    "size": {
      "terms": {
        "field": "size"
      }
    }
  }
}
```

## aggregations of array
```
{
  "aggs": {
    "products": {
      "nested": {
        "path": "products"
      },
      "aggs": {
        "price": {
          "terms": {
            "field": "products.price"
          }
        }
      }
    }
  },
  "size": 0
}
```
## aggregations by price range 
```
{
  "aggregations": {
    "products": {
      "nested": {
        "path": "products"
      },
      "aggs": {
        "price_range": {
          "range": {
            "field": "products.price",
            "ranges": [
              {
                "to": 49
              },
              {
                "from": 49,
                "to": 99
              },
              {
                "from": 100,
                "to": 149
              },
              {
                "from": 150
              }
            ]
          }
        }
      }
    }
  },
  "size": 0
}
```
###

```
{
  "aggregations": {
    "products": {
      "nested": {
        "path": "products"
      },
      "aggs": {
        "fulfilled": {
          "missing": {
            "field": "products.date_fulfilled"
          }
        }
      }
    }
  },
  "size": 0
}
```