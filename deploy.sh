bucketUrl='s3://github-stats.quangthai.be'

s3cmd -P put index.html $bucketUrl
s3cmd -P put --recursive app $bucketUrl
s3cmd -P put --recursive build $bucketUrl
