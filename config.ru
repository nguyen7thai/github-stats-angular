use Rack::Static,
  :urls => ["/bower_components", "/build"]

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'src, max-age=86400'
    },
    ['<html><script type="text/javascript" src="/build/production.js"></script></html>']
  ]
}
