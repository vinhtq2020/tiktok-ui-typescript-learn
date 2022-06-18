export function param(obj: any, fields?: string, excluding?: string): string {
    const ks = Object.keys(obj);
    const arrs = [];
    if (!fields || fields.length === 0) {
      fields = 'fields';
    }
    if (!excluding || excluding.length === 0) {
      excluding = 'excluding';
    }
    for (const key of ks) {
      if (key === fields) {
        if (Array.isArray(obj[key])) {
          const x = obj[key].join(',');
          const str = encodeURIComponent(key) + '=' + encodeURIComponent(x);
          arrs.push(str);
        }
      } else if (key === excluding) {
        const t2 = obj[key];
        if (typeof t2 === 'object' && Array.isArray(t2)) {
          for (const k2 of t2) {
            const v = t2[k2];
            if (Array.isArray(v)) {
              const arr = [];
              for (const y of v) {
                if (y) {
                  if (typeof y === 'string') {
                    arr.push(y);
                  } else if (typeof y === 'number') {
                    arr.push(y.toString());
                  }
                }
              }
              const x = arr.join(',');
              const str = encodeURIComponent(`${excluding}.${k2}`) + '=' + encodeURIComponent(x);
              arrs.push(str);
            } else {
              const str = encodeURIComponent(`${excluding}.${k2}`) + '=' + encodeURIComponent(v);
              arrs.push(str);
            }
          }
        }
      } else {
        const v = obj[key];
        if (Array.isArray(v)) {
          const arr = [];
          for (const y of v) {
            if (y) {
              if (typeof y === 'string') {
                arr.push(y);
              } else if (typeof y === 'number') {
                arr.push(y.toString());
              }
            }
          }
          const x = arr.join(',');
          const str = encodeURIComponent(key) + '=' + encodeURIComponent(x);
          arrs.push(str);
        } else {
          const str = encodeURIComponent(key) + '=' + encodeURIComponent(v);
          arrs.push(str);
        }
      }
    }
    return arrs.join('&');
  }