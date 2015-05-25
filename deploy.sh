bucketUrl='s3://github-stats.quangthai.be'

s3cmd -P put --recursive build $bucketUrl
